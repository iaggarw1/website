import React, { useEffect } from 'react';
import Navbar from './navbar';
import logo from '../assets/IshaanAggarwal.png'; // Adjust the path as necessary
import git from '../assets/github-square.png';
import linkedin from '../assets/linkedin-square.png';

function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const taskbar = document.getElementById('taskbar');
      const contentBlock2 = document.getElementById('content-block-2');
      const contentBlock2Position = contentBlock2.getBoundingClientRect().top + window.scrollY;

      if (window.scrollY > contentBlock2Position) {
        taskbar.style.opacity = '0';
      } else {
        taskbar.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'contact') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full">
        <div id="taskbar" className="top-0 left-0 w-full flex justify-between items-center p-4 bg-white transition-opacity duration-1000 z-10">
          <img src={logo} alt="Logo" className="w-32 h-auto object-contain hover:opacity-75" />
          <div className="flex space-x-4">
            <a href="https://github.com/iaggarw1/" target="_blank" rel="noreferrer">
              <img src={git} alt="GitHub" className="w-7 h-7 object-contain hover:opacity-75" style={{ width: "27px", height: "27px" }} />
            </a>
            <a href="https://www.linkedin.com/in/iaggarw1/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-7 h-7 object-contain hover:opacity-75" />
            </a>
          </div>
        </div>
        <div id="buttons-container" className="flex justify-center items-center flex-grow">
          <div className="flex space-x-2 justify-center">
            <button onClick={() => handleScrollToSection('home')} className="text-xxs font-fira text-black-0 mx-2 hover:opacity-75">// home</button>
            <button onClick={() => handleScrollToSection('about')} className="text-xxs font-fira text-black-0 mx-2 hover:opacity-75">// about</button>
            <button onClick={() => handleScrollToSection('experience')} className="text-xxs font-fira text-black-0 mx-2 hover:opacity-75">// experience</button>
            <button onClick={() => handleScrollToSection('work')} className="text-xxs font-fira text-black-0 mx-2 hover:opacity-75">// work</button>
            <button onClick={() => handleScrollToSection('contact')} className="text-xxs font-fira text-black-0 mx-2 hover:opacity-75">// contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;