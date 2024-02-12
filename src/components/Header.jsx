import React from 'react';

function Header({ currentPage, handleNavigationClick }) {
  return (
    <header>
      <section className="picture">
        <img src="src\assets\images\me.jpg" className="me" alt="Chris Johnson" />
      </section>
      <section className="hName">
        <h1>I am Chris Johnson</h1>
      </section>
      <nav>
        <ul>
          <li onClick={() => handleNavigationClick('about')} className={currentPage === 'about' ? 'active' : ''}>About Me</li>
          <li onClick={() => handleNavigationClick('portfolio')} className={currentPage === 'portfolio' ? 'active' : ''}>Portfolio</li>
          <li onClick={() => handleNavigationClick('contact')} className={currentPage === 'contact' ? 'active' : ''}>Contact Me</li>
          <li onClick={() => handleNavigationClick('resume')} className={currentPage === 'resume' ? 'active' : ''}>Resume</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
