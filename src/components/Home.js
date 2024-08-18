import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import Contact from './Contact'; // Import the Contact component
import About from './About';
import './css/Home.css';
import Features from './Features';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Welcome to Tech AI
              </motion.h1>
              <motion.p
                className="hero-text"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Pioneering the future with cutting-edge artificial intelligence solutions.
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
              >
                
                <ScrollLink to="contact-section" smooth={true} duration={500}>
                  <Button variant="primary" className="hero-button">Contact Us</Button>
                </ScrollLink>
              </motion.div>
            </Col>
            
          </Row>
        </Container>  
      </div>

       {/* Feature Section*/}
       <Element name="features-section">
        <Features/>
      </Element>

      {/* About Section */}
      <Element name="about-section">
        <About />
      </Element>

      {/* Contact Section */}
      <Element name="contact-section">
        <Contact />
      </Element>

      {/* Footer Section */}
      <footer className="footer">
  <Container>
    <Row>
      <Col md={4}>
        <h5>About Us</h5>
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
        <ScrollLink
          to="hero-section"
          smooth={true}
          duration={500}
          className="scroll-link"
        >
          Back to top
        </ScrollLink>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-center">
        <p>&copy; 2024 AI Technology. All rights reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>

    </div>
  );
};

export default Home;
