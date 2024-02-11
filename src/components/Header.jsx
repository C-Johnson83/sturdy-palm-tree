import React from 'react';

function Header() {
  return (
    <header>
           <section className="picture">
      <img src="src\assets\images\me.jpg" className="me" alt="Chris Johnson" />
      <section className="captionBox">
        <section className="caption">
          <h2>Check me out below!</h2>
        </section>
      </section>
    </section>
      <section className="hName">
        <h1>I am Chris Johnson</h1>
      </section>
      <nav>
        <ul>
          <li><a href="#AboutMe">About Me</a></li>
          <li><a href="#Work">Work</a></li>
          <li><a href="#ContactMe">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
