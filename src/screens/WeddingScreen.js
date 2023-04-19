import React from 'react'
import Portfolio from "../components/Portfolio";
import ring from '../images/wedding/ring.jpeg'
import kiss from '../images/wedding/kiss.jpeg'
import cake from '../images/wedding/cake.jpeg'

const WeddingScreen = () => {
    const info = {
      event: "Wedding",
      title: "Alex & Becca",
      location: "St. Louis, IL",
      image1: ring,
      image2: kiss,
      image3: cake,
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
        />
      </>
    );
}

export default WeddingScreen