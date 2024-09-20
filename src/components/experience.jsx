// src/components/Experience.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const Experience = () => {
  const location = useLocation();
  const isActive = location.pathname === '/experience';

  return (
    <section id="experience" className={isActive ? 'active-section' : ''}>
      <h2>Experience</h2>
      <div className="experience-container">
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
          <div className="card-container">
            <Card
              date="May 2024 - August 2024"
              title="Machine Learning Intern · NTT Data"
              content={`
                Addressed the challenge of limited affordable SAR satellite data by developing Generative Adversarial Networks (GAN) to generate synthetic satellite imagery.
                Leveraged Python, PyTorch, Tensorflow, and Docker to design and implement a GAN that enhanced data availability for machine learning models.
                Conducted data analysis on both synthetic and real satellite imagery to extract trends and insights.
                Validated the effectiveness of the synthetic data, proving it closely resembled SAR satellite imagery and could be successfully used for model training and research purposes.
              `}
              tags={['Python', 'PyTorch', 'Tensorflow', 'Docker', 'GAN', 'Data Analysis']}
            />
          </div>
          <br/>
          <div className="card-container">
            <Card
              date="May 2022 - December 2022"
              title="Embedded Software Engineer · Abbott Laboratories"
              content={`
                Individual contributor who was instrumental in delivering two software key milestone deliveries for class C implanted artificial heart.
                Streamlined and coordinated documentation tasks which resulted in savings of $100,000 in Q3 & Q4.
                Developed and debugged C programs, ensuring compliance with MISRA C:2012 standards.
              `}
              tags={['Embedded Systems', 'C Programming', 'MISRA C:2012', 'Documentation']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;