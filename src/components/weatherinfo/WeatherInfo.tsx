import React from "react";
import {
  ThermometerSimple,
  CloudRain,
  Wind,
  Drop,
  Sun,
} from "@phosphor-icons/react";
import { WeatherInfoProps } from "../../types/types";

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  detailedWeather,
  unit,
  convertTemperature,
}) => {
  return (
    <div className="bg-nearBlack ls:w-[262px] ls:ml-[20px] px-[24px] pt-[28px] pb-[8px] shadow-lg  w-full lm:w-[695px] lm:ml-[0px] lm:mt-[20px] mp:w-[595px] pp:w-[495px] lp:w-[395px] lg:w-[500px] xl:w-[630px]  md:w-[400px] h-[398px] xs:h-[18.25rem] xs:w-[359px] xs:mx-0 xs:my-0 xs:p-4 xs:pb-[4px] xs:pt-1  rounded-[12px] ml-[24px]">
      <h3 className="font-nunito xs:hidden  text-base font-normal text-left mb-[20px] text-mediumGray">
        Detalhes do clima hoje
      </h3>
      <ol className="xs:pb-[10px]">
        <li className="flex items-center justify-between py-4 border-b border-charCoal gap-3">
          <div className="flex items-center gap-2">
            <ThermometerSimple className="fill-darkGray" size={24} />
            <span className="font-nunito text-[14px] font-bold text-mutedGray">
              Feels Like
            </span>
          </div>
          <span className="  font-nunito text-[16px] text-lightGray font-bold">
            {convertTemperature(
              parseFloat(detailedWeather?.feels_like)
            )?.toFixed(0)}
            °{unit}
          </span>
        </li>
        <li className="flex items-center justify-between py-4 border-b border-charCoal gap-3">
          <div className="flex items-center gap-2">
            <CloudRain className="fill-darkGray" size={24} />
            <span className="font-nunito text-[14px] font-bold text-mutedGray">
              Probability of Rain
            </span>
          </div>
          <span className="   font-nunito text-[16px] text-lightGray font-bold">
            {detailedWeather?.pop}%
          </span>
        </li>
        <li className="flex items-center justify-between py-4 border-b border-charCoal gap-3">
          <div className="flex items-center gap-2">
            <Wind className="fill-darkGray" size={24} />
            <span className="font-nunito text-[14px] font-bold text-mutedGray">
              Wind Speed
            </span>
          </div>
          <span className="   font-nunito text-[16px] text-lightGray font-bold">
            {(Math.ceil(detailedWeather?.wind_speed * 3600) / 1000)?.toFixed(0)}{" "}
            km/h
          </span>
        </li>
        <li className="flex items-center justify-between py-4 border-b border-charCoal gap-3">
          <div className="flex items-center gap-2">
            <Drop className="fill-darkGray" size={24} />
            <span className="font-nunito text-[14px] font-bold text-mutedGray">
              Air Humidity
            </span>
          </div>
          <span className="   font-nunito text-[16px] text-lightGray font-bold">
            {detailedWeather?.humidity}%
          </span>
        </li>
        <li className="flex items-center justify-between py-4 gap-3">
          <div className="flex items-center gap-2">
            <Sun className="fill-darkGray" size={24} />
            <span className="font-nunito text-[14px] font-bold text-mutedGray">
              UV Index
            </span>
          </div>
          <span className="  font-nunito text-[16px] text-lightGray font-bold">
            {detailedWeather?.uv_index}
          </span>
        </li>
      </ol>
    </div>
  );
};

export default WeatherInfo;
