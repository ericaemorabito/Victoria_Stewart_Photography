import React from "react";
import '../styles/home.css'
import ring from "../images/IMG_0512.jpg";

const HomeScreen = () => {
  return (
    <>
      <div className="background-image text-center">
        <h2>Portrait Photographer based in Murray, Kentucky</h2>
        <button id='see-portfolio-btn'>View Portfolio</button>
      </div>
    </>
  );
};

export default HomeScreen;
