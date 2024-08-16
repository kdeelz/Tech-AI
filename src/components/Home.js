import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import backgroundai from './Photos/Backgroundai.png';
import Contact from './Contact'; // Import the Contact component
import About from './About';
import './css/Home.css';

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
            <Col md={6}>
              <motion.img
                src={backgroundai}
                alt="backgroundai"
                className="hero-image"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <Container>
          <Row>
            <Col md={4}>
              <motion.div
                className="feature-box"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="feature-title">Automation</h3>
                <p className="feature-text">Implementing AI-driven automation to enhance efficiency in business processes.</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                className="feature-box"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="feature-title">Data Analytics</h3>
                <p className="feature-text">Utilizing AI for data processing, analysis, and actionable insights.</p>
              </motion.div>
            </Col>
            <Col md={4}>
              <motion.div
                className="feature-box"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="feature-title">AI Consulting</h3>
                <p className="feature-text">Helping businesses integrate AI technologies into their operations.</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>

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
            <Col md={6}>
              <p>&copy; 2024 AI Technology. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-right">
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
        </Container>
      </footer>
    </div>
  );
};

export default Home;
