import React, { useEffect } from 'react';
import Navbar from './navbar';
import logo from '../assets/IshaanAggarwal.png';
import git from '../assets/github-square.png';
import linkedin from '../assets/linkedin-square.png';
import { Typewriter } from 'react-simple-typewriter'; 

function Home() {
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col w-full">
        <div id="taskbar" className="top-0 left-0 w-full flex justify-between items-center p-4 bg-white transition-opacity duration-1000 z-10">
          <button onClick={() => handleScrollToSection('home')} className="focus:outline-none">
            <img src={logo} alt="Logo" className="w-32 sm:w-48 md:w-64 h-auto object-contain hover:opacity-75" />
          </button>
          <div className="flex space-x-2 sm:space-x-4">
            <a href="https://github.com/iaggarw1/" target="_blank" rel="noreferrer">
              <img src={git} alt="GitHub" className="w-8 sm:w-10 md:w-11 h-8 sm:h-10 md:h-11 object-contain hover:opacity-75" />
            </a>
            <a href="https://www.linkedin.com/in/iaggarw1/" target="_blank" rel="noreferrer">
              <img src={linkedin} alt="LinkedIn" className="w-8 sm:w-10 md:w-11 h-8 sm:h-10 md:h-11 object-contain hover:opacity-75" />
            </a>
          </div>
        </div>
        <div id="buttons-container" className="flex justify-center items-center flex-grow">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 justify-center">
            <button onClick={() => handleScrollToSection('home')} className="text-lg sm:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
              <span className="block leading-none">01</span>
              <span className="block leading-none">// home</span>
            </button>
            <button onClick={() => handleScrollToSection('about')} className="text-lg sm:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
              <span className="block leading-none">02</span>
              <span className="block leading-none">// about</span>
            </button>
            <button onClick={() => handleScrollToSection('experience')} className="text-lg sm:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
              <span className="block leading-none">03</span>
              <span className="block leading-none">// experience</span>
            </button>
            <button onClick={() => handleScrollToSection('projects')} className="text-lg sm:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
              <span className="block leading-none">04</span>
              <span className="block leading-none">// work</span>
            </button>
            <button onClick={() => handleScrollToSection('contact')} className="text-lg sm:text-xl font-fira text-black-0 mx-2 hover:opacity-75 text-right">
              <span className="block leading-none">05</span>
              <span className="block leading-none">// contact</span>
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center h-screen bg-white-500 px-4'>
          <div className="text-center">
            <h1 className='text-4xl sm:text-6xl md:text-8xl font-fira'>Hi, my name is</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 font-fira">Ishaan Aggarwal
              <Typewriter
                words={['']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </h1>
            <p className='text-lg sm:text-2xl md:text-4xl'>🎓 MSc Computer Science 🤖 Machine Learning Enthusiast 💻 Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;