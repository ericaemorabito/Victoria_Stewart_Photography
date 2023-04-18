import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/work.css";

import engagement from "../images/couple.jpg";


const imageVariants = {
  hidden: {
    opactiy: 1,
  },
  visible: {
    opacity: 0.8,
  },
};

const WorkScreen = () => {
  return (
    <Container>
      <Row className="work-row my-3 flex-wrap">
        <Col sm={12} lg={5} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/engagement">
            <motion.img
              src={engagement}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
          <h3 className="work-card-title">Portrait</h3>
        </Col>
        <Col sm={12} lg={5} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/engagement">
            <motion.img
              src={engagement}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
          <h3 className="work-card-title">Portrait</h3>
        </Col>
        <Col sm={12} lg={5} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/engagement">
            <motion.img
              src={engagement}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
          <h3 className="work-card-title">Portrait</h3>
        </Col>
        <Col sm={12} lg={5} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/engagement">
            <motion.img
              src={engagement}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
          <h3 className="work-card-title">Portrait</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkScreen;
