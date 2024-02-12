import React from 'react';
const mystyle = {
    color: "black",
    backgroundColor: "White",
    padding: "10px",
    fontFamily: "Arial"
  };
function Resume() {
    return (
        <main style={mystyle}>
            <h2>My Resume</h2>
            <p>
                Data Analytics <br />--------------------</p>
            <ol>
                <li>Excel</li>
                <li>VBA Scripting</li>
                <li>Python</li>
                <li>Python API's</li>
                <li>Data Analysis Pandas</li>
                <li>SQL: Postgres</li>
                <li>NoSQL Databases: MongoDB</li>
                <li>JavaScript Basics</li>
                <li>Leaflet</li>
                <li>Tableau</li>
                <li>Machine Learning</li>
                <li>Big Data: AWS (Amazon Web Service)</li>
            </ol>
            <p>
                M.E.R.N App Development<br />--------------------</p>
                <ol>
                <li>HTML, CSS, JS</li>
                <li>API's: Web, Third Party, Server Side</li>
                <li>Node.js</li>
                <li>OOP: Object-oriented programming</li>
                <li>Express.js</li>
                <li>SQL: Mysql</li>
                <li>ORM: Object–relational mapping</li>
                <li>MVC: Model–View–Controller </li>
                <li>Computer Science Introduction</li>
                <li>NoSQL: MongoDB, Mongoose</li>
                <li>PWA: Progressive Web Applications</li>
                <li>React</li>
            </ol>
         
        </main>
    )
};

export default Resume;