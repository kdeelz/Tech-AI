import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/Learn.css';
import team from './Photos/team.png';
import innovation from './Photos/innovation.jpg';
import plan from './Photos/plan.jpg';
import data from './Photos/data.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Learn = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="learn-section">
      
      {/* Hero Section */}
      <div className="hero-section-learn">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <motion.h1
                className="hero-title-learn"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1 }}
              >
                Empowering Innovation with AI
              </motion.h1>
              <motion.p
                className="hero-subtitle-learn"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1, delay: 0.3 }}
              >
                At Tech AI, we are dedicated to transforming businesses through cutting-edge artificial intelligence solutions. Our team of experts is committed to delivering innovative services that drive growth and efficiency.
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <Col md={12} data-aos="fade-up">
            <motion.h2
              className="learn-title"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              Why Choose Tech AI
            </motion.h2>
            <motion.p
              className="learn-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At Tech AI, we are passionate about leveraging the power of artificial intelligence to transform the way businesses operate. Our expert team provides innovative solutions in automation, data analytics, and AI consulting, tailored to meet the unique needs of our clients.
            </motion.p>
            <motion.p
              className="learn-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Our mission is to deliver high-quality AI-driven solutions that drive efficiency, improve decision-making, and foster innovation across industries. We believe in the limitless possibilities of AI and are committed to helping businesses unlock their full potential.
            </motion.p>
          </Col>
        </Row>
        <Row className="image-gallery">
          <Col md={3} data-aos="fade-right">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              transition={{ duration: 1 }}
            >
              <img src={team} alt="Team Collaboration" className="gallery-image" />
              <div className="image-description">
                <h5>Team Collaboration</h5>
                <p>
                  Fostering a culture of collaboration is key to innovation. Our diverse team works together to create solutions that drive success.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-right">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInLeft}
              transition={{ duration: 1 }}
            >
              <img src={innovation} alt="AI Innovation" className="gallery-image" />
              <div className="image-description">
                <h5>AI Innovation</h5>
                <p>
                  Pioneering new AI technologies, we stay ahead of the curve to bring the latest advancements to our clients.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ duration: 1 }}
            >
              <img src={plan} alt="Strategic Planning" className="gallery-image" />
              <div className="image-description">
                <h5>Strategic Planning</h5>
                <p>
                  Our strategic planning process is grounded in data-driven insights, ensuring that every decision supports long-term growth.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
              transition={{ duration: 1 }}
            >
              <img src={data} alt="Data Analysis" className="gallery-image" />
              <div className="image-description">
                <h5>Data Analysis</h5>
                <p>
                  Leveraging advanced data analytics, we uncover actionable insights that drive informed business decisions.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row className="additional-details">
          <Col md={12} data-aos="fade-up">
            <motion.p
              className="learn-details-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              At Tech AI, our team is driven by innovation, collaboration, and strategic planning to deliver cutting-edge solutions. We believe in harnessing the power of data to make informed decisions that propel businesses forward.
            </motion.p>
            <motion.p
              className="learn-details-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Whether you're looking to automate processes, gain insights through data analytics, or explore AI-driven strategies, Tech AI is here to help you navigate the complexities of today's digital landscape.
            </motion.p>
          </Col>
        </Row>
        {/* Contact Us Button */}
        <Row className="contact-us-section">
          <div className="contact-us-button">
            <Button variant="primary" size="lg" href="/contact">
              Start Your Journey Now !
            </Button>
          </div>
        </Row>
      </Container>

      <div className='space'>
        
      </div>

    </div>
  );
};

export default Learn;
