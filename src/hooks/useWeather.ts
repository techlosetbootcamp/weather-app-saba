import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../redux/store";
import { fetchWeather } from "../redux/slice/weatherSlice";

import sunnyDay from "../assets/images/ClearDay.png";
import sunnyNight from "../assets/images/ClearNight.png";
import cloudyDay from "../assets/images/CloudsDay.png";
import cloudyNight from "../assets/images/CloudsNight.png";
import rainyDay from "../assets/images/RainDay.png";
import rainyNight from "../assets/images/RainNight.png";
import snowDay from "../assets/images/SnowDay.png";
import snowNight from "../assets/images/SnowNight.png";
import cloudDay from "../assets/images/CloudyDay.png";
import cloudNight from "../assets/images/CloudyNight.png";
import stormDay from "../assets/images/StormDay.png";
import stormNight from "../assets/images/StormNight.png";

const useWeather = () => {
  const { lat, lon } = useParams<{ lat: string; lon: string }>();
  const dispatch: AppDispatch = useDispatch();
  const { detailedWeather, unit } = useSelector(
    (state: RootState) => state?.weather
  );

  useEffect(() => {
    if (lat && lon) {
      dispatch(fetchWeather({ lat: parseFloat(lat), lon: parseFloat(lon) }));
    }
  }, [dispatch, lat, lon]);

  const getDayName = (dateString: string) => {
    const date = new Date(dateString);
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getUTCDay()];
  };

  const isDayTime = (timeString: string) => {
    const localHours = new Date(timeString)?.getHours();
    return localHours >= 6 && localHours < 18;
  };

  const getBackgroundImage = (description: string, isDay: boolean) => {
    if (description?.includes("sunny") || description?.includes("Clear")) {
      return isDay ? sunnyDay : sunnyNight;
    } else if (
      description?.includes("Clouds") ||
      description?.includes("Few Clouds")
    ) {
      return isDay ? cloudyDay : cloudyNight;
    } else if (description?.includes("rainy") || description?.includes("Rain")) {
      return isDay ? rainyDay : rainyNight;
    } else if (
      description?.includes("Storm") ||
      description?.includes("thunderStorm")
    ) {
      return isDay ? stormDay : stormNight;
    } else if (
      description?.includes("Snow") ||
      description?.includes("Snowing")
    ) {
      return isDay ? snowDay : snowNight;
    }
    return isDay ? cloudDay : cloudNight;
  };

  const convertTemperature = (temp: number) => {
    return unit === "C" ? temp : (temp * 9) / 5 + 32;
  };

  const backgroundImage = detailedWeather
    ? getBackgroundImage(
        detailedWeather?.description,
        isDayTime(detailedWeather?.dateTime)
      )
    : null;

  return {
    detailedWeather,
    unit,
    getDayName,
    convertTemperature,
    backgroundImage,
  };
};

export default useWeather;
