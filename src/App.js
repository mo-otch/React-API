import React from 'react';
import './App.css';
import Navbar from './components/header';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Accueil from './pages/index';
import Contact from './pages/Contact';
import Recipes from './components/main/Recette';

function App() {
  return (
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Accueil/>} />
        <Route path="/Accueil" element={<Accueil/>} />
        <Route path="/Recipes" element={<Recipes/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
