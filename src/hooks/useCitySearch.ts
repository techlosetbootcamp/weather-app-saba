import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setCity, fetchCities, setLoading } from "../redux/slice/citySearch";
import { useNavigate } from "react-router-dom";
import { ChangeEvent } from "react";

const useCitySearch = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const city = useSelector((state: RootState) => state?.citySearch?.city);
  const filteredCities = useSelector(
    (state: RootState) => state?.citySearch?.filteredCities
  );
  const loading = useSelector((state: RootState) => state?.citySearch?.loading);

  const handleCityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setCity(value));

    if (value.length > 2) {
      dispatch(fetchCities(value));
    }
  };

  const handleCityClick = (lat: number, lon: number) => {
    dispatch(setLoading(true));
    setTimeout(() => {
      navigate(`/weather/${lat}/${lon}`);
      dispatch(setLoading(false));
    }, 1000);
  };

  return {
    city,
    filteredCities,
    loading,
    handleCityChange,
    handleCityClick,
  };
};

export default useCitySearch;
