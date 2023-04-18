import React from "react";
import "../styles/about.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import tory from "../images/tory.jpeg";

const AboutScreen = () => {
  return (
    <Container fluid>
      <Row className="about-row my-5">
        <Col lg={6} sm={12} className="about-col d-flex flex-column justify-content-center align-items-center">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Col>
        <Col lg={6} sm={12}>
          <img src={tory} alt="tory stewart smiling" id="tory-image"></img>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
