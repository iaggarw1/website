// src/components/Projects.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const Projects = () => {
  const location = useLocation();
  const isActive = location.pathname === '/procects';

  return (
    <section id="projects" className={isActive ? 'active-section' : ''}>
      <h2 className="font-light text-xl">
        <strong>Projects</strong>
      </h2>
      <br/>
      <div className="projects-container">
        <div className="cards">
          <div className="card-container">
            <Card
              date="2024 - Present"
              title="Research Assistant · University of the Pacific Robotics Laboratory"
              content={`
                Investigating how to use Large Language Models (LLMs) for multi-modal robot control.
                Utilized Python, YOLO, PyTorch, C++, and ROS in order to develop a multi-modal robotics control system for the myCobot and depth camera/LiDAR.
                Conducted data collection and analysis from sensors, including LiDAR and depth cameras, to enhance robotic environmental awareness.
                Actively preparing research for publication in IEEE International Robotic Computing Conference.
              `}
              tags={['Python', 'YOLO', 'PyTorch', 'C++', 'ROS']}
            />
          </div>
          <br/>
          </div>
      </div>
    </section>
  );
};

export default Projects;