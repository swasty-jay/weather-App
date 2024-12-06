import React, { useState } from "react";
import Header from "./components/Header";
import WeatherDetails from "./components/WeatherDetails";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
      <Header setWeatherData={setWeatherData} />
      {weatherData ? (
        <WeatherDetails weatherData={weatherData} />
      ) : (
        <p className="mt-10 text-lg">Search for a city to see the weather</p>
      )}
    </div>
  );
};

export default App;
