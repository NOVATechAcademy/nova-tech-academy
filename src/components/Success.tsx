import React from "react";
import { useNavigate } from "react-router-dom";

const Success: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="success-message">
      <h1>Thank You!</h1>
      <p>
        Thank you for applying to NOVA Tech Academy. Your application has been
        successfully submitted.
      </p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
};

export default Success;
