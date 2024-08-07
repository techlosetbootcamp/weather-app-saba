import React from "react";
import { SearchInputProps } from "../../types/types";
import useDropdown from "../../hooks/useDropdown";

const SearchInput: React.FC<SearchInputProps> = ({
  city,
  filteredCities,
  handleCityChange,
  handleCityClick,
}) => {
  const { showDropdown, openDropdown, closeDropdown } = useDropdown();

  const handleCityButtonClick = (lat: number, lon: number) => {
    handleCityClick(lat, lon);
    closeDropdown();
  };

  return (
    <>
      <input
        className="h-[56px] xl:w-[512px] w-[550px] lg:w-[282px]  md:w-[282px] lm:w-[432px] mp:w-[ 400px] pp:w-[342px]  lp:w-[242px] xs:w-[211px] ls:ml-[4px] ls:w-[140px] xs:p-2 p-[16px] inline bg-charCoal text-primary rounded-[8px]"
        type="text"
        placeholder="Search Location"
        onChange={handleCityChange}
        onClick={openDropdown}
        value={city}
      />
      {showDropdown && filteredCities?.length > 0 && (
        <div className="absolute z-10">
          {filteredCities?.map((city, index) => (
            <button
              key={index}
              onClick={() => handleCityButtonClick(city?.lat, city?.lon)}
              className="h-[56px] xl:w-[512px]  lg:w-[282px] md:w-[282px] lm:w-[432px] mp:w-[ 400px] pp:w-[342px]  lp:w-[242px] xs:w-[211px] ml-[136px] ls:w-[140px] rounded-[8px] px-[20px] bg-darkGray mt-[2px] text-lightGray text-left flex items-center hover:bg-gray-700"
            >
              {city?.name}, {city?.country}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
