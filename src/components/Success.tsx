import React from "react";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

//   <div className="error-container">
//   <h1 className="error-title">Error</h1>
//   <p className="error-message">Failed to submit the application. Please try again.</p>
//   <button onClick={() => navigate('/apply')} className="btn">
//     Go Back to Application
//   </button>
// </div>

  return (
    <div className="success-container">
      <h1 className="success-title">Thank You!</h1>
      <p className="success-message">
        Thank you for applying to NOVA Tech Academy. Your application has been
        successfully submitted.
      </p>
      <button onClick={() => navigate("/")} className="btn">Go Back to Home</button>
    </div>
  );
};

export default Success;
