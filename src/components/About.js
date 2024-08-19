import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook
import './css/About.css';

const About = () => {
  // useInView hook to detect when the component is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.1, // The percentage of the component that needs to be visible to trigger the animation
  });

  return (
    <div className="about-section" ref={ref}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <motion.h2
              className="about-title"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, type: 'spring', stiffness: 50 }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              At Tech AI, we are dedicated to pioneering the future with cutting-edge artificial intelligence solutions. 
              Our team of experts specializes in automation, data analytics, and AI consulting, helping businesses 
              integrate advanced technologies into their operations.
            </motion.p>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Our mission is to empower organizations with AI-driven tools and strategies that enhance efficiency, 
              improve decision-making, and drive innovation. We believe in the transformative power of AI and are 
              committed to making it accessible and beneficial for businesses of all sizes.
            </motion.p>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Founded with a vision to lead the AI revolution, Tech AI continues to push the boundaries of what is 
              possible with artificial intelligence. Join us on our journey to create a smarter, more connected world.
            </motion.p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
