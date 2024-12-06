import React, { useState } from "react";
import axios from "axios";

const Header = ({ setWeatherData }) => {
  const [city, setCity] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <header className="w-full p-5 flex flex-col items-center gap-4">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 rounded bg-white text-black"
      />
      <button
        onClick={fetchWeather}
        className="px-4 py-2 bg-indigo-700 rounded hover:bg-indigo-800"
      >
        Get Weather
      </button>
    </header>
  );
};

export default Header;
