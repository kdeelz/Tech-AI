import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import './css/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Tech AI</h5>
            <p>
              Tech AI is at the forefront of AI innovation, dedicated to transforming businesses through intelligent solutions. We offer a range of services tailored to help companies leverage the power of artificial intelligence.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Information</h5>
            <p>Email: info@techaicompany.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 AI Drive, Innovation City, TechLand</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="social-links">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 AI Technology. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
