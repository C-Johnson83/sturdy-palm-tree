// Header.js
import React from 'react';
import Navigation from './navigation'; // Import the Navigation component

const Header = ({ handleNavigationClick }) => {
  return (
    <header>
      <section className="avatarArea">
        <img src="../../public\assets\images\me.jpg" className="avatar" alt="Chris Johnson" /> 
        <h1>Chris Johnson<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.k.a<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chrispy!</h1>
       
    
      {/* Use the Navigation component inside the header */}
      <Navigation handleNavigationClick={handleNavigationClick} />
      </section>
      
    </header>
  );
};



export default Header;


