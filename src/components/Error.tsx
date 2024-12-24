import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <h1 className="error-title">Error</h1>
      <p className="error-message">Failed to submit the application. Please try again.</p>
      <button onClick={() => navigate('/apply')} className="btn">
        Go Back to Application
      </button>
    </div>
  );
};

export default Error;
