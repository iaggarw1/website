// src/components/MainContent.jsx
import React from 'react';
import About from './about';
import Experience from './experience';
import Projects from './projects';

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