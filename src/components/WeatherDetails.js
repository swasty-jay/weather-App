const WeatherDetails = ({ weatherData }) => {
  const { name, main, weather, sys } = weatherData;

  return (
    <div className="container-fluid card w-25 mb-3">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{weather[0].description}</p>
        <p className="">{main.temp}°C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>country: {sys.country}</p>
      </div>
    </div>
  );
};

export default WeatherDetails;
