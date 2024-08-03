import {
  DetailedWeather,
  ForecastItem,
  UVData,
  WeatherData,
  WeatherEntry,
} from "../types/types";
import { formatUnixTimestamp } from "./formatUnixTimestamp";
import { getWeatherIcon } from "./getWeatherIcon";
import { getCurrentTime } from "./getCurrentTime";

const formatWeatherData = (
  weatherData: WeatherData,
  uvData: UVData
): DetailedWeather => {
  const weather: WeatherEntry = weatherData?.list[0];
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const uniqueDays: { [key: string]: ForecastItem } = {};

  weatherData.list.forEach((entry: WeatherEntry) => {
    const date = new Date(entry?.dt * 1000);
    const dayName = days[date?.getUTCDay()];

    if (!uniqueDays[dayName] && date?.getUTCHours() === 12) {
      uniqueDays[dayName] = {
        date: date.toISOString(),
        icon: getWeatherIcon(entry),
        temp: (entry?.main?.temp - 273.15)?.toFixed(0),
        description: entry?.weather[0]?.main,
      };
    }
  });

  const forecast: ForecastItem[] = Object.values(uniqueDays).slice(0, 5);

  return {
    cityName: weatherData?.city?.name,
    country: weatherData?.city?.country,
    dateTime: formatUnixTimestamp(weather?.dt),
    currentTime: getCurrentTime(),
    temperature: (weather?.main?.temp - 273.15)?.toFixed(0),
    description: weather?.weather?.[0]?.main,
    feels_like: (weather?.main?.feels_like - 273.15)?.toFixed(0),
    wind_speed: weather?.wind?.speed,
    humidity: weather?.main?.humidity,
    minTemperature: (weather?.main?.temp_min - 273.15)?.toFixed(0),
    maxTemperature: (weather?.main?.temp_max - 273.15)?.toFixed(0),
    icon: getWeatherIcon(weather),
    uv_index: Number(uvData?.value?.toFixed(0)),
    pop: (weather?.pop * 100)?.toFixed(0),
    forecast,
  };
};

export default formatWeatherData;
