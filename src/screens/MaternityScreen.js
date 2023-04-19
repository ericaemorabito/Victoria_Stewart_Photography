import React from "react";
import Portfolio from "../components/Portfolio";
import beach from "../images/maternity/beach.jpg";
import hug from "../images/maternity/hug.jpg";
import sand from "../images/maternity/sand.jpg";
import head from "../images/maternity/head.jpg";

const MaternityScreen = () => {
  const info = {
    event: "Maternity",
    title: "John & Erica",
    location: "Virginia Beach, VA",
    image1: beach,
    image2: hug,
    image3: sand,
    image4: head,
  };
  return (
    <>
      <Portfolio
        event={info.event}
        title={info.title}
        location={info.location}
        image1={info.image1}
        image2={info.image2}
        image3={info.image3}
        image4={info.image4}
      />
    </>
  );
};

export default MaternityScreen;
