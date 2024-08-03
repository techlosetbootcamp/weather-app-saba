import React from "react";
import LoadingIcon from "../../assets/images/Icons.png";
import SearchHeader from "../../components/header/Header";
import FilterCity from "../../components/filtercity/FilterCity";
import InputField from "../../components/searchweather/SearchWeather";
import useCitySearch from "../../hooks/useCitySearch";

const SearchWeather: React.FC = () => {
  const { city, filteredCities, loading, handleCityChange, handleCityClick } =
    useCitySearch();

  return (
    <div className="h-screen w-full bg-background flex flex-col items-center ">
      <SearchHeader />
      <section>
        <InputField
          city={city}
          handleCityChange={handleCityChange}
          loading={loading}
          LoadingIcon={LoadingIcon}
        />
        <FilterCity
          filteredCities={filteredCities}
          handleCityClick={handleCityClick}
        />
      </section>
    </div>
  );
};

export default SearchWeather;
