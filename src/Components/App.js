
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Analyser from './Analyser';
import Navbar from './NavBar'; // Import Navbar component
import LoginRegister from './LoginRegister'; // Import LoginRegister component
import QueryIdentification from './Queries';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/analyser" element={<Analyser />} />
        <Route path="/queries" element={< QueryIdentification/>} />

        <Route path="/login" element={<LoginRegister />} /> {/* Add LoginRegister route */}
      </Routes>
    </Router>
  );
};

export default App;
