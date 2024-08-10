import React from 'react';
import { Link } from 'react-router-dom';
import ribbon from '../assets/ribbon.png';
import recyclethis from '../assets/recyclethis.png';
import solarcar from '../assets/solarcar.png';
import supportxr from '../assets/supportxr_black.png';

function Projects() {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-light">Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="/recyclethis" className="bg-white rounded-lg shadow-md overflow-hidden group relative no-underline">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <img
              src={ribbon}
              alt="Ribbon"
              className="absolute top-0 left-0 w-16 h-16 z-40"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <div className="relative overflow-hidden bg-white">
            <img
              src={recyclethis}
              alt="Project 1"
              className="w-full h-48 object-contain transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl mt-4 transition-opacity duration-300 group-hover:opacity-75">RecycleThis</h2>
          </div>
        </Link>
        <Link to="/solarcar" className="bg-white rounded-lg shadow-md overflow-hidden group relative no-underline">
          <div className="relative overflow-hidden bg-black">
            <img
              src={solarcar}
              alt="Project 2"
              className="w-full h-48 object-contain transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl mt-4 transition-opacity duration-300 group-hover:opacity-75">Pacific Solar Car Project</h2>
          </div>
        </Link>
        <Link to="/supportxr" className="bg-white rounded-lg shadow-md overflow-hidden group relative no-underline">
          <div className="relative overflow-hidden bg-black">
            <img
              src={supportxr}
              alt="Project 3"
              className="w-full h-48 object-contain transition-transform duration-300 transform group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h2 className="text-xl mt-4 transition-opacity duration-300 group-hover:opacity-75">SupportXR</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;