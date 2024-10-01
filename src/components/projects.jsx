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
              date="Aug 2023 - Aug 2024"
              title="Systems and Controls Lead · Pacific Solar Car Project"
              content={`
                Created a single occupant, street-legal solar car to be raced in Formula Sun Grand Prix to qualify for a 2,000 mile race across the United States, utilizing Python and .Net MAUI to design and implement front-end and back-end monitoring dashboards to record car sensor data, managing the transmission of sensor data payloads from car using MySQL databases in AWS, and programming Arduino using C++ to manage contactor on battery box and headlight functionality of car.
              `}
              tags={['Python', 'C++', '.NET','MySQL', 'AWS', 'Embedded Systems']}
            />
          </div>
          <div className="card-container">
            <Card
              date="Apr 2024"
              title="MirAI: A Chatbot for Medical Diagnosis"
              content={`
                The chatbot application, developed in Python using Reflex and GeminiAPI for backend functionality, features a Figma-designed user-friendly UI, a ResNet-18 based AI model trained on Intel Developer Cloud for accurate medical data interpretation, and real-time interaction capabilities.
                `}
              tags={['Python', 'PyTorch', 'LLM', 'APIs', 'Flask', 'Intel Developer Cloud']}
            />
            <Card
              date="Jan 2024"
              title="SupportXR: A Virtual Reality Customer Support Platform"
              content={`
                Our project, developed using Unity 2022.3.18f and the Meta Quest 3 VR headset, leverages the Meta All in One SDK for passthrough and hand tracking, and Normcore for multiplayer, resulting in a highly immersive and collaborative Extended Reality (XR) experience.
                `}
              tags={['C#', 'Unity', 'Augmented Reality', 'Meta Quest 3', 'XR']}
            />
            <Card
              date="Jan 2024"
              title="RecycleThis: A Sustainability Project"
              content={`
                RecycleThis is an iOS app that helps users classify proper disposal of items, offers waste management tips, and locates nearby recycling bins to promote a cleaner community with ease. 
                `}
              tags={['React Native', 'APIs', 'Python', 'PyTorch', 'MongoDB', 'Expo']}
            />
          </div>
          <br/>
        </div>
      </div>
    </section>
  );
};

export default Projects;