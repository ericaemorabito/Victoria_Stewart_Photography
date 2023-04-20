import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../styles/contact.css";
import tory from "../images/tory.jpeg";

const ContactScreen = () => {
  return (
    <Container fluid>
      <Row className="my-5 mx-lg-5 mx-md-3">
        <Col lg={3} md={0}>
          <img src={tory} id="contact-image"></img>
        </Col>
        <Col lg={6} md={8} sm={12}>
          <Form id="contact-form" className="p-5 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Select aria-label="Default select example">
              <Form.Label>Service</Form.Label>
              <option>Service</option>
              <option value="Engagement">Engagement</option>
              <option value="Portrait">Portrait</option>
              <option value="Maternity">Maternity</option>
              <option value="Wedding">Wedding</option>
              <option value="Other">Other</option>
            </Form.Select>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
