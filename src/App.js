import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="bg-info-subtle container-fluid">
      <Header setWeatherData={setWeatherData} />
      {weatherData ? (
        <WeatherDetails weatherData={weatherData} />
      ) : (
        <p className="text-center">Search for a city to see the weather</p>
      )}
    </div>
  );
};

export default App;
