import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuccessMessage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="container success-message">
      <h1>Success</h1>
      <p>Your message has been sent successfully!</p>
      <button onClick={() => navigate('/')} className="btn">
        Go Back to Home
      </button>
    </div>
  );
};

export default SuccessMessage;
