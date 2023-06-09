import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/work.css";

import engagement from "../images/engagement/couple.jpg";
import portrait from "../images/portrait/tory.jpeg";
import wedding from "../images/wedding/kiss.jpeg";
import maternity from "../images/maternity/sand.jpg";

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
    <Container className="mt-5">
      <Row className="work-row my-3 flex-wrap">
        <Col sm={12} lg={5} md={8} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/engagement">
            <h3 className="work-card-title">Engagement</h3>
            <motion.img
              src={engagement}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
        </Col>
        <Col sm={12} lg={5} md={8} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/wedding">
            <h3 className="work-card-title">Wedding</h3>
            <motion.img
              src={wedding}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
        </Col>
        <Col sm={12} lg={5} md={8} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/portrait">
            <h3 className="work-card-title">Portrait</h3>
            <motion.img
              src={portrait}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
        </Col>
        <Col sm={12} lg={5} md={8} className="work-card-col" id="portrait-card">
          <a href="/Victoria_Stewart_Photography/maternity">
            <h3 className="work-card-title">Maternity</h3>
            <motion.img
              src={maternity}
              alt="couple smiling"
              id="engagement-image"
              variants={imageVariants}
              initial="hidden"
              whileHover="visible"
            ></motion.img>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkScreen;
