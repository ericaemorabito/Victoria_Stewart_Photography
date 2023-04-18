import React from "react";
import "../styles/home.css";
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleToWork = () => {
    navigate('/Victoria_Stewart_Photography/work')
  }

  return (
    <>
      <div className="background-image text-center">
        <h2>Portrait Photographer based in Murray, Kentucky</h2>
        <button id="see-portfolio-btn" onClick={handleToWork}>View Portfolio</button>
      </div>
    </>
  );
};

export default HomeScreen;
