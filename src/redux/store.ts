import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slice/weatherSlice";
import citySearchReducer from './slice/citySearch';
const store = configureStore({
  reducer: {
    citySearch: citySearchReducer,
    weather: weatherReducer,
   
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
