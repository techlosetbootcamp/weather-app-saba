import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { setUnit } from "../redux/slice/weatherSlice";

export const useToggleUnit = () => {
  const dispatch: AppDispatch = useDispatch();
  const unit = useSelector((state: RootState) => state?.weather?.unit);

  const toggleUnit = () => {
    dispatch(setUnit(unit === "C" ? "F" : "C"));
  };

  return { unit, toggleUnit };
};
