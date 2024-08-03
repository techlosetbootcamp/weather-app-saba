import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const WEATHER_BASE_URL = import.meta.env.VITE_APP_WEATHER_BASE_URL;
export const fetchWeatherApi = async (lat: number, lon: number) => {
  const weatherResponse = await axios.get(`${WEATHER_BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  const uvResponse = await axios.get(`${WEATHER_BASE_URL}/uvi`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
    },
  });

  return {
    weather: weatherResponse.data,
    uv: uvResponse.data,
  };
};
