import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import About from './components/About/About';
import NavBar from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content-wrapper container-lg bg-white">
          <header className="bg-dark text-white text-center py-3">
            <h1 className="display-3">Coeur d'Alene Cuisine</h1>
          </header>

          <NavBar />

          <main className="container my-5">
            <AnimatedRoutes />
          </main>

          <footer className="ft bg-dark text-white text-center py-1">
            <p className='ft'>© 2023 Coeur d'Alene Cuisine. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;
