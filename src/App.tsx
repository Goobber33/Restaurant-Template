import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap CSS
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar'; // Make sure you import NavBar
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />  {/* Include the NavBar component here */}

        <header className="bg-dark text-white text-center py-3">
          <h1>Coeur d'Alene Cuisine</h1>
        </header>

        <main className="container my-5">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center py-3">
          <p>© 2023 Coeur d'Alene Cuisine. All rights reserved.</p>
          <p>© Created by Kyle Parks</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
