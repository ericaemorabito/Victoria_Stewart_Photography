import React from "react";
import "../styles/header.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const headerInformation = {
    title: "VS Photography",
    titlehref: "/Victoria_Stewart_Photography/",
    link1: "Work",
    href1: "/Victoria_Stewart_Photography/work",
    link2: "About",
    href2: "/Victoria_Stewart_Photography/about",
    link3: "Contact",
    href3: "/Victoria_Stewart_Photography/contact",
    instaHref: '',
    facebookHref: '',
    pinterestHref: ''
  };

  return (
    <Container fluid className="header">
      <Row className="header-title-row text-center my-2">
        <a href={headerInformation.titlehref}>
          <h1 className="header-title">{headerInformation.title}</h1>
        </a>
      </Row>
      <Row className="header-icon-row">
        <div className="social-media-div">
          <a href={headerInformation.instaHref}>
            <FontAwesomeIcon icon={faInstagram} className="mx-2"/>
          </a>
          <a href={headerInformation.facebookHref}>
            <FontAwesomeIcon icon={faFacebook} className="mx-2"/>
          </a>
          <a href={headerInformation.pinterestHref}>
            <FontAwesomeIcon icon={faPinterest} className="mx-3"/>
          </a>
        </div>
      </Row>
      <Row className="header-nav-row text-center">
        <Col>
          <a href={headerInformation.href1}>
            <p>{headerInformation.link1}</p>
          </a>
          <a href={headerInformation.href2}>
            <p>{headerInformation.link2}</p>
          </a>
          <a href={headerInformation.href3}>
            <p>{headerInformation.link3}</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
