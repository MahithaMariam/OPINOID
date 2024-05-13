import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Analyser from './Analyser';
import Navbar from './NavBar'; // Import Navbar component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/analyser" element={<Analyser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
