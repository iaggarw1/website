// src/components/MainContent.jsx
import React from 'react';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';

const MainContent = ({ background }) => {
  return (
    <div className="main-content" style={{ background }}>
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default MainContent;