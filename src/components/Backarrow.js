import React from "react";
import { Row, Col } from "react-bootstrap";
import arrow from "../images/arrow.jpeg";
import "../styles/backarrow.css";

const Backarrow = () => {
  return (
    <>
      <Row className="back-row">
        <Col lg={2}>
          <a href="/Victoria_Stewart_Photography/work">
            <img id="arrow-image" className="mx-3" src={arrow} alt="back to work arrow"></img>
          </a>
          <h2 id="view-work">Work</h2>
        </Col>
      </Row>
    </>
  );
};

export default Backarrow;
