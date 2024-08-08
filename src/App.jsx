import React, { useState } from 'react';
import './index.css';
import Home from './components/home';
import About from './components/about';
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
      <div id="about" className="h-screen bg-white-200">
        <About />
      </div>
      <div id="experience" className="h-screen bg-white-300">
      </div>
      <div id="work" className="h-screen bg-white-400">
        <Projects/>
      </div>
      <div id="contact" className="h-screen bg-white-500">Content Block 4</div>
    </div>
  );
}

export default App;