import React from "react";
import WeatherCard from "../../components/weathercard/WeatherCard";
import WeatherInfo from "../../components/weatherinfo/WeatherInfo";
import DayForecast from "../../components/dayforecast/DayForecast";
import useWeather from "../../hooks/useWeather";

const WeatherDetails: React.FC = () => {
  const {
    detailedWeather,
    unit,
    getDayName,
    convertTemperature,
    backgroundImage,
  } = useWeather();

  return (
    <div className="h-screen bg-background text-primary p-[24px] flex flex-col xs:p-[8px] sp:w-[275px]   xs:w-[375px]  items-center">
      {detailedWeather ? (
        <div className="flex flex-col md:flex-row lm:flex-col lm:w-[700px]  mp:w-[600px] pp:w-[500px] lp:w-[400px] sp:w-[259px]  overflow-y-scroll scrollbar-none xs:w-[359px] ">
          <WeatherCard
            backgroundImage={backgroundImage}
            detailedWeather={detailedWeather}
            unit={unit}
          />
          <div className="flex-2 flex flex-col  xs:mt-[8px] sp:h-[398] sp:w-[259px]  xs:h-[498px] xs:w-[359px] xs:flex xs:flex-col">
            <WeatherInfo
              detailedWeather={detailedWeather}
              unit={unit}
              convertTemperature={convertTemperature}
            />
            <DayForecast
              forecast={detailedWeather?.forecast}
              unit={unit}
              getDayName={getDayName}
              convertTemperature={convertTemperature}
              detailedWeather={detailedWeather}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherDetails;
