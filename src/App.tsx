import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import WeatherDetails from "./pages/weatherDetail/WeatherDetail";
import Layout from "./pages/Layout";
import Home from "./pages/searchWeather/SearchWeather";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "weather/:lat/:lon",
        element: <WeatherDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
