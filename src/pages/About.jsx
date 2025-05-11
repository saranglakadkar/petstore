import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";




function About() {
  return (
    <Container className="about-container mt-5">
      <h2 className="text-center mb-4">🐾 About PetStore</h2>
      <p className="text-center mb-5">
        At <strong>PetStore</strong>, we believe pets are not just animals — they are family. Our mission is to provide top-quality products that ensure your furry friends stay happy, healthy, and loved.
      </p>

      <Row className="mb-5">
        <Col md={6}>
          <h4>🌟 Our Mission</h4>
          <p>
            To offer affordable and premium pet supplies to every pet parent and ensure that every tail wags with joy.
          </p>
        </Col>
        <Col md={6}>
          <h4>🎯 Our Vision</h4>
          <p>
            To become India’s most trusted and loved online pet store by focusing on quality, care, and customer satisfaction.
          </p>
        </Col>
      </Row>

      <h3 className="text-center mb-4">👨‍💻 Meet Our Team</h3>
      <Row className="text-center">
        <Col md={4}>
          <Card className="team-card">
            <Card.Img
              variant="top"
              src="/images/Sarang.png"
              className="team-img"
            />
            <Card.Body>
              <Card.Title>Sarang Lakadkar</Card.Title>
              <Card.Text>Founder & Developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="team-card">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg"
              className="team-img"
            />
            <Card.Body>
              <Card.Title>Shivam Birla</Card.Title>
              <Card.Text>Backend & Database Engineer</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="team-card">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/01/08/18/25/man-593333_1280.jpg"
              className="team-img"
            />
            <Card.Body>
              <Card.Title>Rutuja Gaikwad</Card.Title>
              <Card.Text>UI/UX & Frontend Expert</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
