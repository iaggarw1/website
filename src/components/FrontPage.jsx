import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

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

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const mainContent = document.querySelector('.main-content');
    if (section && mainContent) {
      mainContent.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleMouseEnter = () => {
    document.querySelector('.front-page').classList.add('disable-pointer-events');
  };

  const handleMouseLeave = () => {
    document.querySelector('.front-page').classList.remove('disable-pointer-events');
  };

  return (
    <div
      className="front-page"
      style={{ background }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="pl-20 pt-20 text-l font-bold tracking-tight text-slate-200 sm:text-5xl">
        <a href="/">Ishaan Aggarwal</a>
      </h1>
      <h2 className="pl-20 mt-3 text-lg font-light tracking-tight text-slate-200 sm:text-xl"><strong>Software Engineer & Machine Learning Enthusiast</strong>
      </h2>
      <p className="pl-20 mt-3 max-w-xs leading-normal font-light custom-right-margin">
      I explore AI and robotics by working on diverse, impactful projects.
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