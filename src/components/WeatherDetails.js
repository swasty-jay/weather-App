const WeatherDetails = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <div className="mt-10 p-6 rounded bg-white text-black text-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-xl">{weather[0].description}</p>
      <p className="text-3xl font-semibold">{main.temp}°C</p>
      <p>Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherDetails;
