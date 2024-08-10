import React from 'react';
import { useNavigate } from 'react-router-dom';
import solarcar from '../../assets/solarcar.png';

function SolarCar() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-light">SolarCar</h1>
      <div className="relative overflow-hidden bg-white">
        <img
          src={solarcar}
          alt="SolarCar"
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="p-4">
        <p>Details about the SolarCar project...</p>
      </div>
      <button
        onClick={() => navigate('/projects')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
}

export default SolarCar;