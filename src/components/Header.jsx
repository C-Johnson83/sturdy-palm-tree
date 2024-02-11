import React from 'react';

function Header() {
  return (
    <header>
      <section className="hName">
        <h1>I am Chris Johnson</h1>
      </section>
           <section className="picture">
      <img src="src\assets\images\me.jpg" className="me" alt="Chris Johnson" />
  
    </section>
      <nav>
        <ul>
          <li><a href="#AboutMe">About Me</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#ContactMe">Contact Me</a></li>
          <li><a href="#Resume">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
