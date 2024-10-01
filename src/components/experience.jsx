// src/components/Experience.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card';

const Experience = () => {
  const location = useLocation();
  const isActive = location.pathname === '/experience';

  return (
    <section id="experience" className={isActive ? 'active-section' : ''}>
      <h2 className="font-light text-xl">
        <strong>Experience</strong>
      </h2>
      <br/>
      <div className="experience-container">
        <div className="cards">
          <div className="card-container">
            <Card
              date="2024 - Present"
              title="Research Assistant · University of the Pacific Robotics"
              content={`
                Developed a multi-modal robot control system for the myCobot using Python, YOLO, PyTorch, C++, and IsaacROS, leveraging sensor data from LiDAR and depth cameras to enhance environmental awareness, with research being prepared for publication in the IEEE International Robotic Computing Conference.
              `}
              tags={['Python', 'YOLO v8', 'PyTorch', 'C++', 'ROS', 'LiDAR', 'Computer Vision']}
            />
          </div>
          <br/>
          <div className="card-container">
            <Card
              date="May 2024 - Aug 2024"
              title="Machine Learning Intern · NTT Data"
              content={`
                Developed a Generative Adversarial Network (GAN) using Python, PyTorch, TensorFlow, and Docker to generate synthetic SAR satellite imagery, validated its accuracy for model training, and conducted data analysis to enhance data availability for machine learning models.`}
              tags={['Python', 'PyTorch', 'Tensorflow', 'Docker', 'GAN', 'Data Analysis']}
            />
          </div>
          <br/>
          <div className="card-container">
            <Card
              date="May 2022 - Dec 2022"
              title="Embedded Software Engineer · Abbott Laboratories"
              content={`
                Delivered two software milestones for a Class C implanted artificial heart, streamlined documentation tasks saving $100,000 in Q3 and Q4, and developed and debugged C programs in compliance with MISRA C:2012 standards.
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