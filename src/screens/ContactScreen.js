import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "../styles/contact.css";
import emailjs from "@emailjs/browser";

const ContactScreen = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "vmjs_photos",
        "template_l9o5a61",
        e.target,
        "YSI8La-h1GQLdgKpd"
      )
      .then(
        (result) => {
          console.log('Success email sent');
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <Container fluid>
      <Row className="my-5 mx-lg-5 mx-md-3 d-flex flex-column justify-content-center align-items-center">
        <Col
          lg={8}
          md={10}
          sm={12}
          id="contact-title"
          className="d-flex flex-column align-items-center justify-content-start mr-1"
        >
          <h2 className="text-left">Let's Get in Touch</h2>
          <p className="title-description ml-0">
            Schedule a free consulation about the services you're interested in.
          </p>
        </Col>

        <Col lg={6} md={10} sm={12}>
          <Form onSubmit={sendEmail} id="contact-form" className="p-5 rounded">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Label>Interested in</Form.Label>
            <Form.Select name="service" aria-label="Default select example">
              <Form.Label>Service</Form.Label>
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
              <Form.Control name="message" as="textarea" rows={3} />
            </Form.Group>

            <Button className="send-btn" variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
