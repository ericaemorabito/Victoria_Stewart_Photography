import React from 'react'
import Portfolio from "../components/Portfolio";
import side from '../images/portrait/side.jpeg'
import smile from '../images/portrait/smile.jpeg'
import tor from '../images/portrait/tory.jpeg'

const PortraitScreen = () => {
    const info = {
      event: "Portraits",
      title: "Mark & Tory",
      location: "Atlanta, GA",
      image1: side,
      image2: smile,
      image3: tor,
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

export default PortraitScreen