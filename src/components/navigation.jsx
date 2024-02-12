// Navigation.js
import React from 'react';

const Navigation = ({ handleNavigationClick }) => {
  return (
    <nav >
      <ul >
        <li onClick={() => handleNavigationClick('about')} className='linkName'>About Me</li>
        <li onClick={() => handleNavigationClick('portfolio')} className='linkName'>Portfolio</li>
        <li onClick={() => handleNavigationClick('contact')} className='linkName'>Contact Me</li>
        <li onClick={() => handleNavigationClick('resume')} className='linkName'>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
