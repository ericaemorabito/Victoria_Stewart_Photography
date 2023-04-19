import React from "react";
import Portfolio from "../components/Portfolio";
import couple from '../images/engagement/couple.jpg'
// import pose from '../images/engagement/pose.jpg'
import ring from '../images/engagement/ring.jpg'
// import walk from '../images/engagement/walk.jpg'

const EngagementScreen = () => {
  const info = {
    event: "Engagement",
    title: "John & Erica",
    location: "Williamsburg, VA",
    image1: couple,
    image2: ring,
    image3: ring,
    image4: ring,
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

export default EngagementScreen;
