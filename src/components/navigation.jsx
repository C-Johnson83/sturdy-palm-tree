// Navigation.js
import React from 'react';

const Navigation = ({ handleNavigationClick }) => {
  return (
    <nav className='headNav'>
      <ul>
        <li><a href="#about" onClick={() => handleNavigationClick('about')} className='linkName'>About Me</a></li>
        <li><a href="#portfolio" onClick={() => handleNavigationClick('portfolio')} className='linkName'>Portfolio</a></li>
        <li><a href="#contact" onClick={() => handleNavigationClick('contact')} className='linkName'>Contact Me</a></li>
        <li><a href="#resume" onClick={() => handleNavigationClick('resume')} className='linkName'>Resume</a></li>
      </ul>
    </nav>
  );
};


export default Navigation;
