import axios from "axios";
import { City } from "../../types/types";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchCitiesApi = async (cityName: string): Promise<City[]> => {
  if (!API_KEY || !BASE_URL) {
    throw new Error("API_KEY or BASE_URL is not defined in .env file");
  }

  const response = await axios.get<City[]>(
    `${BASE_URL}/direct?q=${cityName}&limit=5&appid=${API_KEY}`
  );
  return response.data;
};
