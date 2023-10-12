import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div>
       <section className="hero-section bg-dark text-white text-center py-5">
        <h1>Welcome to Coeur d'Alene Cuisine</h1>
        <p>Where Culinary Excellence Meets Lakeside Elegance</p>
      </section>

      <section className="testimonials text-center my-5 p-4">
        <h2>What Our Customers Say</h2>
        <p>"Easily the best dining experience in Coeur d'Alene. The ambiance is elegant yet relaxed, and the food is out of this world!" - Emily Thompson</p>
        <p>"I can't recommend Coeur d'Alene Cuisine enough! The Coeur d'Alene Burger is to die for." - Mark Johnson</p>
      </section>

      <section className="featured-menu text-center my-5 p-4">
        <h2>Featured Menu Items</h2>
        <p>Our menu offers a culinary journey, taking inspiration from local flavors as well as global cuisine. From our signature Coeur d'Alene Burger, featuring locally-sourced beef and homemade aioli, to our vegan-friendly Lakeside Risotto, there's something for everyone.</p>
      </section>
    </div>
  );
};

export default HomePage;
