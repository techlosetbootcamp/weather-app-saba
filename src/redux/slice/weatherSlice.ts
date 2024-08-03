import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import formatWeatherData from "../../utils/formatWeatherData";
import { fetchWeatherApi } from "../api/weatherApi";
import { WeatherState } from "../../types/types";

const initialState: WeatherState = {
  detailedWeather: null,
  loading: false,
  error: null,
  unit: "C",
};

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ lat, lon }: { lat: number; lon: number }) => {
    return fetchWeatherApi(lat, lon);
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setUnit(state, action: PayloadAction<"C" | "F">) {
      state.unit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.detailedWeather = formatWeatherData(
          action.payload.weather,
          action.payload.uv
        );
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
      });
  },
});

export const { setUnit } = weatherSlice.actions;

export default weatherSlice.reducer;
