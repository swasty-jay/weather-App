import React, { useState } from "react";
import axios from "axios";

const Header = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e7caa89f251143b268c53a5c82dfe2ae`
      );
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <header className="text-center py-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2"
      />
      <button onClick={fetchWeather} className="btn btn-primary mx-3 shadow  ">
        Get Weather
      </button>
    </header>
  );
};

export default Header;
