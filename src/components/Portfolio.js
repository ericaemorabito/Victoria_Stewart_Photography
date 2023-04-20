import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/portfolio.css";
import Backarrow from "./Backarrow";

const Portfolio = ({
  event,
  title,
  location,
  image1,
  image2,
  image3,
  image4,
}) => {
  return (
    <Container fluid>
      <Row className="title-row text-center">
        <p className="font-italic mt-4 mb-0">{event}</p>
        <h2 className="my-0">{title}</h2>
        <p className="my-0">{location}</p>
      </Row>
      <Row className="portfolio-row d-flex justify-content-center">
        <Col lg={12} className="portfolio-image-col">
          <img className="portfolio-image" src={image1}></img>
        </Col>
        <Col lg={12} className="portfolio-image-col">
          <img className="portfolio-image" src={image2}></img>
        </Col>
        <Col lg={12} md={12} className="portfolio-image-col">
          <img className="portfolio-image" src={image3}></img>
        </Col>
        <Col lg={12} className="portfolio-image-col">
          <img className="portfolio-image" src={image4}></img>
        </Col>
      </Row>
      <Backarrow />
    </Container>
  );
};

export default Portfolio;
