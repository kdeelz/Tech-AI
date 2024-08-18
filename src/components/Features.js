import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './css/Features.css'; // Assume you have some custom styles

const Features = () => {
  return (
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
              <p className="feature-text">
                Implementing AI-driven automation to enhance efficiency in business processes.
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="feature-box"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="feature-title">Data Analytics</h3>
              <p className="feature-text">
                Utilizing AI for data processing, analysis, and actionable insights.
              </p>
            </motion.div>
          </Col>
          <Col md={4}>
            <motion.div
              className="feature-box"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="feature-title">AI Consulting</h3>
              <p className="feature-text">
                Helping businesses integrate AI technologies into their operations.
              </p>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;
