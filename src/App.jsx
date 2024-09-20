import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import MainContent from './components/MainContent';
import './App.css'; // Import CSS file for styling

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const calculateBackground = () => {
    const { x, y } = mousePosition;
    const darkCrimson = 'rgb(59, 0, 0)';
    const lightCrimson = 'rgb(160,0,0)'; // Lighter shade of crimson
    return `radial-gradient(circle 500px at ${x}px ${y}px, ${lightCrimson}, ${darkCrimson})`;
  };

  const background = calculateBackground();

  return (
    <Router>
      <div className="app" style={{ background }}>
        <div className="left-side">
          <FrontPage />
        </div>
        <div className="right-side">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/about" element={<MainContent />} />
            <Route path="/experience" element={<MainContent />} />
            <Route path="/projects" element={<MainContent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;