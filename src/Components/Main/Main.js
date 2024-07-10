// src/components/Hero.js
import React from 'react';
import '../Main/Main.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <img className="gif-image" src="https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif" alt="Hero GIF" />
      <p className="hero-subtitle hero-text mt-4">
        <span>Intract users </span>
        <span>have together made more than </span>
        <span>$100 million </span>
        <span>in web3. </span>
        <br />
        <span>Join them and </span>
        <span>learn how to earn crypto!</span>
      </p>
      <button className="get-started-button">
        Get Started <img src="https://www.intract.io/assets/arrow-right-1c96f4ae.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Hero;
