// Header.js
import React from 'react';
import Navigation from './Navigation'; // Import the Navigation component

const Header = ({ handleNavigationClick }) => {
  return (
    <header>
      <section className="hName">

        <img src="src\assets\images\me.jpg" className="me" alt="Chris Johnson" /><h1>Chris Johnson "a.k.a" Chrispy</h1>
      </section>
      {/* Use the Navigation component inside the header */}
      <Navigation handleNavigationClick={handleNavigationClick} />
    </header>
  );
};

export default Header;
