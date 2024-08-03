import React from "react";
import { CityListProps } from "../../types/types";

const FilterCity: React.FC<CityListProps> = ({
  filteredCities,
  handleCityClick,
}) => {
  return (
    <div>
      <div className=" w-full mt-1">
        {filteredCities?.map((city, index) => (
          <button
            key={index}
            onClick={() => handleCityClick?.(city?.lat, city?.lon)}
            className="sm:w-[504px] md:w-[504px] lg:w-[504px] w-[311px] h-[56px] xsm:w-[200px] rounded-[8px] px-[20px] bg-darkGray mt-[2px] text-lightGray text-left flex items-center"
          >
            {city?.name}, {city?.country}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterCity;
