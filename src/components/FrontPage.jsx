import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function FrontPage({ background }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="front-page" style={{ background }}>
      <h1 className="text-l font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Ishaan Aggarwal</a></h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Software Engineer & Machine Learning Enthusiast</h2>
      <p className="mt-4 max-w-xs leading-normal font-light">I build pixel-perfect, engaging, and accessible digital experiences.</p>
      <br/>
      <br/>
      <br/>
      <ul>
        <li className={currentPath === '/about' ? 'active' : 'inactive'}>
          <NavLink to="/about" className="hover-magnify">About</NavLink>
        </li>
        <li className={currentPath === '/experience' ? 'active' : 'inactive'}>
          <NavLink to="/experience" className="hover-magnify">Experience</NavLink>
        </li>
        <li className={currentPath === '/projects' ? 'active' : 'inactive'}>
          <NavLink to="/projects" className="hover-magnify">Projects</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default FrontPage;