import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About'; // Import the About component
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-dark text-white text-center py-3">
          <h1>Coeur d'Alene Cuisine</h1>
        </header>

        <NavBar />

        <main className="container my-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} /> {/* New About Route */}
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center py-3">
          <p>© 2023 Coeur d'Alene Cuisine. All rights reserved.</p>
          <p>© 2023 Created by Kyle Parks</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
