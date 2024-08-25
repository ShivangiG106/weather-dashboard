// src/api.js
import axios from 'axios';

const API_KEY = 'd78d105ad869b0780794e24317442c0c';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city, units = 'metric') => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&units=${units}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something else happened while setting up the request
      console.error("Error:", error.message);
    }
    throw error;
  }
};

export const fetchFiveDayForecast = async (city, units = 'metric') => {
  try {
    console.log("units",units)
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&units=${units}&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    throw error;
  }
};
