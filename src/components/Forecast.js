// src/components/Forecast.js
import React from 'react';

const Forecast = ({ forecast }) => {
  if (!forecast) return null;

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {forecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt={day.weather[0].description} />
            <p>Avg Temp: {day.main.temp}°</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
