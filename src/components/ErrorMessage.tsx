import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorMessage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container error-message">
      <h1>Error</h1>
      <p>Failed to send your message. Please try again.</p>
      <button onClick={() => navigate('/contact-us')} className="btn">
        Go Back to Contact Us
      </button>
    </div>
  );
};

export default ErrorMessage;
