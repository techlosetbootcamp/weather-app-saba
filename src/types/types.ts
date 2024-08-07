export type WeatherData = {
  list: WeatherEntry[];
  city: {
    name: string;
    country: string;
  };
};

export type WeatherEntry = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  pop: number;
};

export type UVData = {
  value: number;
};

export type DetailedWeather = {
  cityName: string;
  country: string;
  dateTime: string;
  currentTime: string;
  temperature: string;
  description: string;
  feels_like: string;
  wind_speed: number;
  humidity: number;
  minTemperature: string;
  maxTemperature: string;
  icon: string;
  uv_index: number;
  pop: string;
  forecast: ForecastItem[];
};

export type ForecastItem = {
  date: string;
  icon: string;
  temp: string;
  description: string;
};

export type City = {
  name: string;
  country: string;
  lat: number;
  lon: number;
};

export type CityListProps = {
  filteredCities: City[];
  handleCityClick: (lat: number, lon: number) => void;
};

export type WeatherCardProps = {
  backgroundImage: string | null;
  detailedWeather: DetailedWeather;
  unit: string;
};

export type WeatherInfoProps = {
  detailedWeather: DetailedWeather;
  unit: string;
  convertTemperature: (temp: number) => number;
};

export type WeatherState = {
  detailedWeather: DetailedWeather | null;
  loading: boolean | null;
  error: string | null;
  unit: "C" | "F";
};

export type DayForecastProps = {
  forecast: ForecastItem[];
  unit: string;
  getDayName: (dateString: string) => string;
  convertTemperature: (temp: number) => number;
  detailedWeather: DetailedWeather;
};

export type GetBackgroundImageParams = {
  description: string;
  isDay: boolean;
};

export type GetBackgroundImage = (
  params: GetBackgroundImageParams
) => string | null;

export type InputFieldProps = {
  city: string;
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  LoadingIcon: string;
};
export type CitySearchState = {
  city: string;
  filteredCities: City[];
  loading: boolean;
  error: string | null;
};



export type SearchInputProps= {
  city: string;
  filteredCities: City[];
  handleCityChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCityClick: (lat: number, lon: number) => void;
}
