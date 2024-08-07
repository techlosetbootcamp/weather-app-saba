import React from "react";
import { ToggleLeft, ToggleRight } from "@phosphor-icons/react";
import divider from "../../assets/images/Divider.png";
import logocar from "../../assets/images/Logo.svg";
import { WeatherCardProps } from "../../types/types";
import { useToggleUnit } from "../../hooks/useToggleUnit";
import { useConvertTemperature } from "../../hooks/useConvertTemperature";
import useCitySearch from "../../hooks/useCitySearch";
import SearchInput from "../searchcity/SearchCity";

const WeatherCard: React.FC<WeatherCardProps> = ({
  backgroundImage,
  detailedWeather,
}) => {
  const { unit, toggleUnit } = useToggleUnit();
  const { convertTemperature } = useConvertTemperature();
  const { city, filteredCities, handleCityChange, handleCityClick } =
    useCitySearch();

  return (
    <div className="h-[720px] bg-nearBlack rounded-[12px] xs:rounded-[1px] sp:w-[259px]  ls:w-[259px] ls:ml-[20px] sp:h-[296px] xs:w-[359px] xs:h-[396px] relative">
      <div className="relative mt-4 xs:mt-[12px] ls:ml-[20px]">
        <span className="pl-[16px]">
          <img
            src={logocar}
            className="inline bg-charCoal  h-[56px] w-[56px] p-4 rounded-[8px]"
          />
        </span>
        {unit === "C" ? (
          <ToggleLeft
            className="inline fill-darkGray ls:hidden bg-charCoal togge h-[56px] w-[56px] p-2 rounded-[8px] mx-1 cursor-pointer"
            onClick={toggleUnit}
          />
        ) : (
          <ToggleRight
            className="inline fill-darkGray ls:hidden bg-charCoal h-[56px] w-[56px]  mx-1 p-2 rounded-[8px] cursor-pointer"
            onClick={toggleUnit}
          />
        )}

        <SearchInput
          city={city}
          filteredCities={filteredCities}
          handleCityChange={handleCityChange}
          handleCityClick={handleCityClick}
        />
      </div>

      <div
        className="flex-1 flex flex-col xs:w-[335px] ls:w-[235px]  xs:m-[12px] xs:h-[304px]  xs:rounded-[8px] xs:p-[20px] items-center justify-center xl:w-[632px] lm:w-[660px] mp:w-[565px]  lp:w-[365px] lp:h-[350px] pp:w-[465px]  w-[400px] h-[616px] p-[16px] m-4 rounded-[8px] relative "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-[20px] leading-[36px] xs:font-bold xs:text-[16px]  xs:leading-tight xs:absolute xs:left-0 xs:my-[0px] xs:ml-[20px] font-bold mb-4 absolute top-4 left-4 text-lightGray font-nunito m-4">
          {detailedWeather?.cityName}, {detailedWeather?.country}
        </h2>
        <p className="absolute xs:font-normal xs:text-[12px] xs:absolute xs:top-[40px] xs:left-0 xs:ml-[20px] xs:mt-[0px] top-16 left-4 font-nunito text-base font-normal text-lightGray ml-4 mt-2">
          {detailedWeather?.dateTime}
        </p>
        <p className="xs:font-bold text-[16px] xs:text-[12px] xs:m-[0px] xs:right-[18px] absolute top-4 right-4 font-nunito text-xl font-bold m-4">
          {detailedWeather?.currentTime}
        </p>

        <div className="text-center">
          <img
            src={detailedWeather?.icon}
            alt="weather icon"
            className=" ls:w-[90px] ls:h-[90px ]  ls:mr-[10px] xs:relative xs:top-[70px] xs:left-[90px] xs:h-[168px] xs:w-[168px] w-[248px] h-[248px] absolute bottom-4 right-4"
          />
          <div className="absolute bottom-4 left-4 xs:left-[19px] text-left">
            <div className="xs:font-extrabold xs:text-[48px] lm:text-[50px] text-[40px] xs:leading-10 xs:text-left xs:mx-auto ml-4 text-primary font-nunito xl:text-[96px] sm:md:lg:text-[60px] font-extrabold">
              {detailedWeather?.temperature &&
                convertTemperature(
                  parseFloat(detailedWeather?.temperature)
                )?.toFixed(0)}
              °{unit.toLowerCase()}
            </div>
            <div className="gap-2 mb-[16px] xs:mb-[0px]">
              <p className="xs:text-lightGray xs:ml-[0px] text-primary text-[20px] xs:text-[16px] xs:block  text-lg ml-4 mt-2 inline font-nunito font-bold">
                {detailedWeather?.maxTemperature &&
                  convertTemperature(
                    parseFloat(detailedWeather?.maxTemperature)
                  )?.toFixed(0)}
                °{unit.toLowerCase()} /{" "}
                {detailedWeather?.minTemperature &&
                  convertTemperature(
                    parseFloat(detailedWeather?.minTemperature)
                  )?.toFixed(0)}
                °{unit?.toLowerCase()}
              </p>
              <img src={divider} id="divi" className="inline xs:hidden ml-4" />
              <p className="leading-[28px] text-[20px] xs:ml-[0px] xs:text-[14px] text-mutedGray ml-4 inline font-nunito font-normal">
                {detailedWeather?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
