// src/store/citySearch.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { City, CitySearchState } from "../../types/types";
import { fetchCitiesApi } from "../api/citySearchApi";
const initialState: CitySearchState = {
  city: "",
  filteredCities: [],
  loading: false,
  error: null,
};

export const fetchCities = createAsyncThunk<City[], string>(
  "citySearch/fetchCities",
  async (cityName: string) => {
    const response = await fetchCitiesApi(cityName);
    return response;
  }
);

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.filteredCities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch cities";
      });
  },
});

export const { setCity, setLoading } = citySearchSlice.actions;

export default citySearchSlice.reducer;
