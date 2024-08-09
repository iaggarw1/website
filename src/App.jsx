import React, { useState } from 'react';
import './index.css';
import Home from './components/home';
import About from './components/about';
import Experience from './components/experience';
import Projects from './components/projects';
import Contact from './components/contact_form';
import Navbar from './components/navbar';

function App() {
  const [activeComponent, setActiveComponent] = useState('home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderComponent()}
      <div id="about" >
        <About />
      </div>
      <div id="experience" >
        <Experience />
      </div>
      <div id="work">
        <Projects/>
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;