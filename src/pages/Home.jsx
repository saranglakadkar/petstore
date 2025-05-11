import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import "./Home.css";
const Home = () => {
  return (
    <Container className="mt-5 home-container">
      {/* Hero Section */}
      <Row className="align-items-center mb-5">
        <Col md={6} className="text-section animate__animated animate__fadeInLeft">
          <h1 className="mb-4">Welcome to 🐾 PetStore</h1>
          <h2>Unleash Happiness at PetStore 🐾</h2>
          <p>
            Your ultimate destination for pet essentials: food, toys, grooming, and more!
          </p>
          <Button variant="success" as={Link} to="/products" className="animate__animated animate__pulse animate__infinite">
            🛍️ Shop Now
          </Button>
        </Col>
        <Col md={6} className="animate__animated animate__fadeInRight">
          <img
            src="https://images.unsplash.com/photo-1672688170458-3891ee91b821?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cute Pet"
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>

      {/* Why Pet Lovers Choose Us Section */}
      <h3 className="text-center mb-4">✨ Why Pet Lovers Choose Us</h3>
      <Row className="g-4 text-center">
        <Col md={4}>
          <Card className="feature-card animate__animated animate__fadeIn">
            <Card.Body>
              <h4>🐶 Quality Products</h4>
              <p>Top brands for your furry friend’s health and happiness.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card animate__animated animate__fadeIn">
            <Card.Body>
              <h4>🚚 Fast Delivery</h4>
              <p>Get pet products delivered quickly to your doorstep.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card animate__animated animate__fadeIn">
            <Card.Body>
              <h4>❤️ Trusted by Thousands</h4>
              <p>Thousands of happy customers and wagging tails!</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* More Features Section */}
      <h3 className="text-center mb-4 mt-5">🌟 Our Additional Features</h3>
      <Row className="g-4 text-center">
        <Col md={4}>
          <Card className="feature-card animate__animated animate__zoomIn">
            <Card.Body>
              <h4>💡 Pet Care Tips</h4>
              <p>Get expert advice on how to care for your pet.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card animate__animated animate__zoomIn">
            <Card.Body>
              <h4>💎 Pet Accessories</h4>
              <p>Stylish collars, leashes, and pet apparel.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="feature-card animate__animated animate__zoomIn">
            <Card.Body>
              <h4>🏆 Premium Membership</h4>
              <p>Unlock exclusive offers and discounts.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
