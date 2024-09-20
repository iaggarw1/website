// src/components/Projects.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();
  const isActive = location.pathname === '/projects';

  return (
    <section id="projects" className={isActive ? 'active-section' : ''}>
      <h2>Projects</h2>
      <p>
        When I'm not at the computer, I'm usually rock climbing, reading...
      </p>
    </section>
  );
};

export default Projects;