import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Apply from './components/Apply';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import Programs from './components/Programs';


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
    </Router>
  );
};

export default App;
