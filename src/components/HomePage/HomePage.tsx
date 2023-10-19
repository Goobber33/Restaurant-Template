import React from 'react';
import './HomePage.css';
import customer1 from './customer1.jpg';
import customer2 from './customer2.jpg';


const HomePage: React.FC = () => {
  return (
    <div>
      <section className="hero-section bg-dark text-white text-center py-5">
        <h2 className="py-1 text-decoration-underline" style={{fontSize: 60}}>Welcome to Coeur d'Alene Cuisine</h2>
        <p style={{fontSize: 23}}>Where Culinary Excellence Meets Lakeside Elegance</p>
      </section>

      <section className="testimonials text-center my-5 p-4">
        <h3 className="mb-5 text-decoration-underline">What Our Customers Say</h3>

        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="flex-shrink-0 me-3">
            <img src={customer1} alt="Customer 1" className="img-fluid" style={{width: "20rem", height: "25rem", objectFit: "cover"}} />
          </div>
          <div className="flex-grow-1">
            <p>"Easily the best dining experience in Coeur d'Alene. The ambiance is elegant yet relaxed, and the food is out of this world!" - Emily Thompson</p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <div className="flex-grow-1">
            <p>"I can't recommend Coeur d'Alene Cuisine enough! The Coeur d'Alene Burger is to die for." - Mark Johnson</p>
          </div>
          <div className="flex-shrink-0 ms-3">
            <img src={customer2} alt="Customer 2" className="img-fluid" style={{width: "20rem", height: "25rem", objectFit: "cover"}} />
          </div>
        </div>

      </section>

      <section className="featured-menu text-center my-5 p-4">
        <h4>Featured Menu Items</h4>
        <p>Our menu offers a culinary journey, taking inspiration from local flavors as well as global cuisine. From our signature Coeur d'Alene Burger, featuring locally-sourced beef and homemade aioli, to our vegan-friendly Lakeside Risotto, there's something for everyone.</p>
      </section>
    </div>
  );
};

export default HomePage;
