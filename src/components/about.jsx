import React from 'react';
import portrait from '../assets/portrait.png';

function About() {
  return (
    <div className="p-4">
      <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-light">About Me</h1>
      <p className="text-center text-lg sm:text-2xl md:text-4xl font-light">
        I am a current Masters of Science Computer Science graduate student at the University of the Pacific.
        I currently work as a Research Assistant for the Robotics Lab at the UOP. 
        In the past, I have completed a CO-OP at Abbott Laboratories in Pleasanton, CA, where I was a leading contributor to the development of a class C implanted artificial heart.
        I have also interned at NTT Data in Tokyo, Japan, where I developed a Generative Adversarial Network to synthetically create datasets based on SAR satellite data. 
        In the future, I aspire to leverage my expertise in AI and robotics to drive innovation.
      </p>
      <div className="flex justify-center my-8">
        <img src={portrait} alt="Portrait" className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50 rounded-full" />
      </div>
    </div>
  );
}

export default About;