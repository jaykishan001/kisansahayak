import React, { useState, useEffect } from "react";

function WeatherComp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async (latitude, longitude) => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=835f7721cda44d7e9c8191959242704&q=${latitude},${longitude}&aqi=yes`
        );
        const data = await response.json();
        setWeatherData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchWeatherData(latitude, longitude);
          },
          (error) => {
            console.error("Error getting user location:", error);
            setError("Error getting user location");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
        setLoading(false);
      }
    };

    getLocation();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Error fetching weather data</div>;
  }

  return (
    <div>
      <h2>
        Weather in {weatherData.location.name}, {weatherData.location.country}
      </h2>
      <p>Temperature: {weatherData.current.temp_c}°C</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <p>Humidity: {weatherData.current.humidity}%</p>
      {/* Add more weather information here as needed */}
    </div>
  );
}

export default WeatherComp;
