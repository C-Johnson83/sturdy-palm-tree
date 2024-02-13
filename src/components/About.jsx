import React from 'react';
const mystyle = {
  color: "black",
  backgroundColor: "White",
  padding: "10px",
  fontFamily: "Arial"
};


function About() {
  return (
    <main style={mystyle}>
      <h3>About Me</h3>

    
      <p className='para'>
Greetings,<br /><br />

I am Chris Johnson, a dedicated RPG enthusiast with a profound love for virtual adventures and a deep-rooted passion for anime, and a new found passion for coding. <br />Among the myriad of captivating anime series, "One Piece" holds a special place in my heart, a journey I've been immersed in since 2009.<br /><br />

In my professional endeavors, I have committed countless hours to self-learning VBA scripting, culminating in proficient expertise in both VBA coding and analysis. I started learning the visual aspect of Excel and VBA which lead me to Data Analytics. <br />My pursuit of excellence led me to attain an outstanding average score of 102 during an intensive six-month bootcamp at the esteemed University of Minnesota. <br />Currently, I am enthusiastically engaged in another challenging bootcamp program at the same reputable institution, delving into the intricacies of FullStack coding.<br />

The dynamic field of web design beckons to me with its endless possibilities. <br /><br />In the domain of Data Analytics, I excel in Excel and VBA scripting, wield Python and its APIs adeptly, analyze data using Pandas, and navigate SQL databases like Postgres or MySQL with ease. <br />Additionally, my proficiency extends to JavaScript basics, Leaflet, Tableau, and delving into the realms of machine learning and AWS for big data solutions.<br /><br />

In the domain of M.E.R.N app development, I command a versatile skill set including HTML, CSS, and JS, adeptly utilize various APIs, and have a solid foundation in object-oriented programming with Node.js and Express.js. <br />My knowledge extends to SQL databases like Postgres and <br /><br />MySQL, utilizing ORM techniques, and embracing the MVC architecture. Furthermore, I have experience in NoSQL databases like MongoDB and am well-versed in developing Progressive Web Applications (PWAs) with React.
Within my portfolio, you will find a showcase of my work encompassing the skills I learned in Data Analytics and Full Stack Coding.

Best regards,
Chris Johnson</p>
    
  
    </main>
  );
}
export default About;