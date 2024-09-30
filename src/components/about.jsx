// src/components/About.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const isActive = location.pathname === '/about';

  return (
    <section id="about" className={isActive ? 'active-section' : ''}>
      <p className="pt-10 font-light">
        In 2022, I embarked on my journey as a <strong>Master of Science in Computer Science</strong> student at the <strong>University of the Pacific</strong>, where I’ve been diving deep into <strong>artificial intelligence</strong> and <strong>robotics</strong>. Currently, I’m working as a <strong>Research Assistant</strong> at the <strong>UOP Robotics Lab</strong>, researching and implementing a ROS to have LLMs control general purpose robots.</p>
      <br/>
      <p className='font-light'>
        Over the years, I’ve had the chance to take on diverse roles, from contributing to the development of a class C implanted artificial heart during a <strong>CO-OP</strong> at <strong><a href="https://www.abbott.com" target="_blank" rel="noopener noreferrer">Abbott Laboratories</a></strong> to interning at <strong><a href="https://www.nttdata.com" target="_blank" rel="noopener noreferrer">NTT Data</a></strong> in Tokyo, where I worked on a <strong>Generative Adversarial Network</strong> to synthesize datasets using <strong>SAR satellite data</strong>.
      </p>
      <br/>
      <p className="font-light">
        Looking ahead, I’m eager to continue exploring the intersection of <strong>AI</strong> and <strong>robotics</strong>, with the ultimate goal of driving technological advancement and solving complex challenges in these fields.
      </p>
    </section>
  );
};

export default About;