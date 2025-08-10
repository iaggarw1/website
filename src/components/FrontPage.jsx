import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function FrontPage({ background }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSection, setActiveSection] = useState('about'); // Default to 'about' section

  useEffect(() => {
    let observer;
    
    const createObserver = () => {
      const sections = document.querySelectorAll('section');
      const isMobile = window.innerWidth < 768;
      const mainContent = document.querySelector('.main-content');
      

      
      if (sections.length === 0 || (!isMobile && !mainContent)) {
        setTimeout(createObserver, 100);
        return;
      }

      if (observer) {
        observer.disconnect();
      }
      
      const options = {
        root: isMobile ? null : mainContent,
        rootMargin: isMobile ? '-20% 0px -20% 0px' : '0px',
        threshold: isMobile ? 0.1 : 0.6,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, options);

      sections.forEach((section) => {
        observer.observe(section);
      });
    };

    createObserver();

    const handleResize = () => {
      // Debounce resize events
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(createObserver, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (observer) {
        observer.disconnect();
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(window.resizeTimeout);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    
    // Check if we're on mobile (screen width < 768px)
    const isMobile = window.innerWidth < 768;
    
    if (section) {
      if (isMobile) {
        // On mobile, scroll the entire window to the section
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        // On desktop, scroll within the main-content container
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          mainContent.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  const handleMouseEnter = () => {
    document.querySelector('.front-page').classList.add('disable-pointer-events');
  };

  const handleMouseLeave = () => {
    document.querySelector('.front-page').classList.remove('disable-pointer-events');
  };

  return (
    <>
      {/* Desktop Version */}
      <div
        className="front-page hidden md:block"
        style={{ background }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="pl-20 pt-20 text-5xl font-bold tracking-tight text-slate-200">
          <a href="/">Ishaan Aggarwal</a>
        </h1>
        <h2 className="pl-20 mt-3 text-xl font-light tracking-tight text-slate-200"><strong>Software Engineer & Machine Learning Enthusiast</strong>
        </h2>
        <p className="pl-20 mt-3 max-w-xs leading-normal font-light custom-right-margin">
        I explore AI and robotics by working on diverse, impactful projects.
        </p>
        <div className="mb-12"></div>
        <ul className="pl-20 text-xl">
          <li className={`link-item ${activeSection === 'about' ? 'active-section' : ''}`}>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover-magnify">About</a>
          </li>
          <li className={`link-item ${activeSection === 'experience' ? 'active-section' : ''}`}>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="hover-magnify">Experience</a>
          </li>
          <li className={`link-item ${activeSection === 'projects' ? 'active-section' : ''}`}>
            <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')} className="hover-magnify">Projects</a>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Bar */}
      <nav className="mobile-nav md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold text-white">
            <a href="/">Ishaan Aggarwal</a>
          </h1>
          <div className="flex space-x-6">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')} 
              className={`text-sm font-medium transition-colors ${
                activeSection === 'about' ? 'text-pink-300 border-b-2 border-pink-300' : 'text-white hover:text-pink-300'
              }`}
            >
              About
            </a>
            <a 
              href="#experience" 
              onClick={(e) => handleNavClick(e, 'experience')} 
              className={`text-sm font-medium transition-colors ${
                activeSection === 'experience' ? 'text-pink-300 border-b-2 border-pink-300' : 'text-white hover:text-pink-300'
              }`}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              onClick={(e) => handleNavClick(e, 'projects')} 
              className={`text-sm font-medium transition-colors ${
                activeSection === 'projects' ? 'text-pink-300 border-b-2 border-pink-300' : 'text-white hover:text-pink-300'
              }`}
            >
              Projects
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default FrontPage;