import { DayForecastProps } from "../../types/types";

const DayForecast: React.FC<DayForecastProps> = ({
  forecast,
  unit,
  getDayName,
  convertTemperature,
  detailedWeather,
}) => {
  return (
    <div className="bg-nearBlack ls:w-[259px] ls:ml-[20px] lm:ml-[0px] mt-[16px] xs:mt-[8px] xs:p-[12px] ml-[24px] pt-[28px] px-[24px] pb-[24px] rounded-lg w-full md:w-[400px] lg:w-[500px] xl:w-[630px]  h-[296px] lm:w-[695px] mp:w-[595px] pp:w-[495px] lp:w-[395px] xs:ml-[0px] shadow-lg xs:gap-4 xs:h-[176px] xs:w-[359px] ">
      <h3 className="font-nunito xs:hidden text-base font-normal leading-[22.4px] text-left mb-[20px] text-mediumGray">
        Previsão para 5 dias
      </h3>
      <div className="flex text-[14px] sm:flex  md:grid-cols-5 xs:flex xs:h-[152px]">
        {forecast?.map((day, index) => (
          <div
            key={index}
            className="flex flex-col bg-nearBlack items-center w-full lg:w-[116px] md:w-[70px] lm:w-[150px]  xl:w-[116px] ls:w-[50px]"
          >
            <span className="font-nunito text-xs text-[10px] lg:text-[14px] xl:text-[14px] font-bold text-mutedGray block lg:hidden">
              {getDayName(day?.date).slice(0, 3)}
            </span>
            <span className="font-nunito text-xs text-[10px] lg:text-[14px] xl:text-[14px] font-bold text-mutedGray  hidden lg:block">
              {getDayName(day?.date)}
            </span>

            <img
              src={day?.icon}
              alt="weather icon"
              className="w-[67px] h-[67px] mt-2 mb-4 xs:mb-[0px]"
            />
            <span className="font-nunito text-sm sm:text-lg font-normal text-mutedGray">
              {day?.description}
            </span>
            <p className="font-nunito text-xs  sm:text-lg font-bold mb-4 mt-1 text-lightGray xs:flex xs:flex-col">
              <span className="temperature">
                {detailedWeather?.maxTemperature &&
                  convertTemperature(
                    parseFloat(detailedWeather?.maxTemperature)
                  ).toFixed(0)}
                °{unit?.toLowerCase()}&nbsp;
              </span>
              <span className="temperature text-mediumGray  md:hidden lg:inline">
                {detailedWeather?.minTemperature &&
                  convertTemperature(
                    parseFloat(detailedWeather?.minTemperature)
                  ).toFixed(0)}
                °{unit?.toLowerCase()}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayForecast;
