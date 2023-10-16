import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav justify-content-center w-100">
          <li className="nav-item h5">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item h5">
            <Link className="nav-link" to="/about">Our Story</Link>
          </li>
          <li className="nav-item h5">
            <Link className="nav-link" to="/menu">Menu</Link>
          </li>
          <li className="nav-item h5">
            <Link className="nav-link" to="/contact">Private Events</Link>
          </li>
          <li className="nav-item h5">
            <Link className="nav-link" to="/online">Order Online</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
