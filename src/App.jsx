import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact_form';
import Navbar from './components/navbar';
import RecycleThis from './components/projects_pages/recyclethis';
import SolarCar from './components/projects_pages/solarcar';
import SupportXR from './components/projects_pages/supportxr';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <a id="home">
                <Home />
              </a>
              <a id="about">
                <About />
              </a>
              <a id="experience">
                <Experience />
              </a>
              <a id="projects">
                <Projects />
              </a>
              <a id="contact">
                <Contact />
              </a>
            </>
          } />
          <Route path="/recyclethis" element={<RecycleThis />} />
          <Route path="/solarcar" element={<SolarCar />} />
          <Route path="/supportxr" element={<SupportXR />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;