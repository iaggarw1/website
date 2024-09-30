import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function FrontPage({ background }) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [activeSection, setActiveSection] = useState(currentPath);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust this value to determine when a section is considered in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <div className="front-page" style={{ background }}>
      <h1 className="pl-20 pt-20 text-l font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Ishaan Aggarwal</a>
      </h1>
      <h2 className="pl-20 mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Software Engineer & Machine Learning Enthusiast
      </h2>
      <p className="pl-20 mt-4 max-w-xs leading-normal font-light">
        I build pixel-perfect, engaging, and accessible digital experiences.
      </p>
      <br />
      <br />
      <br />
      <ul className="pl-20 text-l">
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
  );
}

export default FrontPage;