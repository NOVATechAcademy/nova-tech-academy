import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="background-banner">
        <h1>Welcome to NOVA Tech Academy</h1>
        <p>Your journey to innovation and technology starts here!</p>
      </div>
      <div className="container">
        <div className="sections">
          <div className="section">
            <h2>About Us</h2>
            <p>Discover our mission and vision.</p>
            <Link to="/about-us">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="section">
            <h2>FAQ</h2>
            <p>Find answers to common questions.</p>
            <Link to="/faq">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="section">
            <h2>Programs</h2>
            <p>Explore the variety of programs we offer.</p>
            <Link to="/programs">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="section">
            <h2>Contact Us</h2>
            <p>Reach out for more details.</p>
            <Link to="/contact-us">
              <button>Learn More</button>
            </Link>
          </div>
          <div className="section">
            <h2>Apply</h2>
            <p>Start your journey with us today.</p>
            <Link to="/apply">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Icon with Text */}
      <div className="whatsapp-container">
        <a
          href="https://wa.me/17036498778"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <i className="fab fa-whatsapp whatsapp-icon"></i>
          <span className="whatsapp-text">WhatsApp us</span>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
