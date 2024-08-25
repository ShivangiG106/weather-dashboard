// src/components/CurrentWeather.js
import React from 'react';

const CurrentWeather = ({ weather }) => {
  if (!weather) return null;

  const { temp, temp_min, temp_max, humidity } = weather.main;
  const { speed, deg } = weather.wind;
  const { description, icon } = weather.weather[0];

  return (
    <div className="current-weather">
      <h2>Current Weather in {weather.name}</h2>
      <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
      <p>Temperature: {temp}°</p>
      <p>Min Temp: {temp_min}° | Max Temp: {temp_max}°</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s, Direction: {deg}°</p>
      <p>{description}</p>
    </div>
  );
};

export default CurrentWeather;
