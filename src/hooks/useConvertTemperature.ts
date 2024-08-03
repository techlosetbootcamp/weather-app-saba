import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export const useConvertTemperature = () => {
  const unit = useSelector((state: RootState) => state?.weather?.unit);

  const convertTemperature = (temp: number) => {
    return unit === "C" ? temp : (temp * 9) / 5 + 32;
  };

  return { convertTemperature, unit };
};
