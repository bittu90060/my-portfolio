import React from 'react';
import "./Home.css";


import Hero from "./Hero";
import Stats from "./Stats";
import Skills from "./Skills";
import About from "./About";
import Services from "./Services";
import Certifications from "./Certifications";
import Projects from "./Projects";

function Home() {
  return (
    <div className="home-container">
      <div className="top-section">
        <Hero />
        
      </div>
    </div>
  );
}

export default Home;