// src/App.js
import React, { useState } from 'react';
import './App.css';
import { fetchCurrentWeather, fetchFiveDayForecast } from './api';
import WeatherForm from './components/WeatherForm';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import ErrorMessage from './components/ErrorMessage';
import ToggleUnit from './components/ToggleUnit';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState('');
  const [unit, setUnit] = useState('metric');

  const handleSearch = async (city) => {
    try {
      const weatherData = await fetchCurrentWeather(city, unit);
      const forecastData = await fetchFiveDayForecast(city, unit);
      setCurrentWeather(weatherData);
      setForecast(forecastData.list.filter((_, index) => index % 8 === 0)); // Every 8th item for daily average
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  return (
    <div className="app">
      <h1>Weather Forecast Dashboard</h1>
      <WeatherForm onSubmit={handleSearch} />
      <ToggleUnit unit={unit} toggleUnit={toggleUnit} />
      <ErrorMessage message={error} />
      <CurrentWeather weather={currentWeather} />
      <Forecast forecast={forecast} />
    </div>
  );
};

export default App;
