// src/components/ToggleUnit.js
import React from 'react';

const ToggleUnit = ({ unit, toggleUnit }) => {
  return (
    <div className="toggle-unit">
      <button onClick={toggleUnit}>
        Switch to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
      </button>
    </div>
  );
};

export default ToggleUnit;
