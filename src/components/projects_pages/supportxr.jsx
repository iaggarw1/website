import React from 'react';
import { useNavigate } from 'react-router-dom';
import supportxr from '../../assets/supportxr.png';

function SupportXR() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-light">SupportXR</h1>
      <div className="relative overflow-hidden bg-white">
        <img
          src={supportxr}
          alt="SupportXR"
          className="w-full h-48 object-contain"
        />
      </div>
      <div className="p-4">
        <p>Details about the SupportXR project...</p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
}

export default SupportXR;