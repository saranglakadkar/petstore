import React, { useState, useRef } from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_22ad9ch", "template_bssiu7f", form.current, "Yox1HDqMLx935AxJU")
      .then(
        (result) => {
          alert("Thank you! Your message has been sent.");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <Container className="contact-container mt-5 mb-5">
      <Card className="shadow-lg p-4 contact-card">
        <h2 className="text-center mb-4">📩 Contact Us</h2>
        <Form ref={form} onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="formMessage" className="mb-4">
            <Form.Label>Your Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Write your message here..."
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="text-center">
            <Button variant="success" type="submit" className="px-5 py-2 rounded-pill">
              Send Message
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Contact;
