import React from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/Programs.CSS'; // Add CSS for styling the page

const Programs: React.FC = () => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate('/apply'); // Redirect to Apply.tsx
  };

  return (
    <div className="programs-container">
      <h1 className="programs-title">Full Stack Java Developer Bootcamp</h1>
      <p className="programs-description">
        Are you ready to launch your career as a software engineer or full-stack developer? Join our 
        <strong> 12-week Full Stack Java Developer Bootcamp</strong>. This immersive training program is designed 
        to equip you with the in-demand skills you need to succeed in the tech industry. Our curriculum covers:
      </p>
      <ul className="programs-list">
        <li>Core Java Programming and Object-Oriented Design</li>
        <li>Front-end Development with HTML, CSS, and JavaScript</li>
        <li>Modern Frameworks: React.js for UI and Spring Boot for backend</li>
        <li>Database Management: SQL, MySQL, and MongoDB</li>
        <li>Hands-on projects and live coding sessions</li>
        <li>Career services to help you secure your dream job</li>
      </ul>
      <p className="programs-description">
        After completing the bootcamp, our dedicated career services team will assist you in landing a job as a 
        software engineer or full-stack developer. With industry-relevant projects, practical experience, and 
        interview preparation, you’ll be ready to excel in the competitive tech world.
      </p>

      <div className="program-details">
        <div className="program-info">
          <h2 className="program-name">Full-Time Coding Bootcamp</h2>
          <p>
            <strong>Start Date:</strong> Jan. 27, 2025 - Apr. 27, 2025
          </p>
          <p>
            <strong>Days:</strong> Mon - Fri
          </p>
          <p>
            <strong>Time:</strong> 10:00 am - 5:00 pm ET
          </p>
          <p>
            <strong>Apply By:</strong> Jan. 23, 2025
          </p>
          <button className="apply-button" onClick={handleApplyClick}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Programs;
