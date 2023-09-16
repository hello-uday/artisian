import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
    
 const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div>
      <div>
        <h1>hello world</h1>
        <button onClick={handleButtonClick}>Go to Login</button>
      </div>
    </div>
  );
};

export default Homepage;
