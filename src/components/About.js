import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './css/About.css';

const About = () => {
  return (
    <div className="about-section">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="about-title">About Us</h2>
            <p className="about-text">
              At Tech AI, we are dedicated to pioneering the future with cutting-edge artificial intelligence solutions. 
              Our team of experts specializes in automation, data analytics, and AI consulting, helping businesses 
              integrate advanced technologies into their operations.
            </p>
            <p className="about-text">
              Our mission is to empower organizations with AI-driven tools and strategies that enhance efficiency, 
              improve decision-making, and drive innovation. We believe in the transformative power of AI and are 
              committed to making it accessible and beneficial for businesses of all sizes.
            </p>
            <p className="about-text">
              Founded with a vision to lead the AI revolution, Tech AI continues to push the boundaries of what is 
              possible with artificial intelligence. Join us on our journey to create a smarter, more connected world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
