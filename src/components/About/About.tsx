import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-section">
      <h2>About Us</h2>
      <p>Since opening our doors in 2005, Coeur d'Alene Cuisine has become an unrivaled culinary institution...</p>
      <div className="mission">
        <h3>Our Mission</h3>
        <p>We aim to provide high-quality food, sourced from local ingredients, that delights your taste buds and nourishes your soul.</p>
      </div>
      <div className="team">
        <h3>Meet the Team</h3>
        <p>Our team consists of skilled chefs, dedicated waitstaff, and a management team that ensures the smooth operation of Coeur d'Alene Cuisine.</p>
      </div>
    </div>
  );
};

export default About;
