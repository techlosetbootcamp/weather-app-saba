import { WeatherEntry } from "../types/types";

export const getWeatherIcon = (weather: WeatherEntry): string => {
  const weatherCode = weather?.weather[0]?.icon;
  return `https://openweathermap.org/img/wn/${weatherCode}@2x.png`;
};
