import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Element } from 'react-scroll';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/Services.css'; // Ensure you have a CSS file for services
import consulting from './Photos/consulting.png';
import innovation from './Photos/innovation.jpg';
import plan from './Photos/plan.jpg';
import auto from './Photos/automation.png';
import Navbar from './Navbar';
import { motion } from 'framer-motion';

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Define animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="services-section">
     
     
      
      {/* Hero Section */}
      <div className="hero-section-service">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <motion.h1
                className="hero-title-service"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1 }}
              >
                Transform Your Business with AI
              </motion.h1>
              <motion.p
                className="hero-subtitle-service"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Discover how our tailored AI solutions can elevate your business and drive innovation.
              </motion.p>
            </Col>
          </Row>
        </Container>
      </div>
      
      <Container>
        <Row>
          <Col md={12} data-aos="fade-up">
            <motion.h2
              className="services-title"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="services-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1, delay: 0.3 }}
            >
              At Tech AI, we offer a range of services designed to leverage the power of artificial intelligence and transform your business. Our expert team delivers customized solutions tailored to meet the unique needs of your company.
            </motion.p>
          </Col>
        </Row>
        <Row className="service-gallery">
          <Col md={3} data-aos="fade-right">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <img src={consulting} alt="AI Consulting" className="gallery-image" />
              <div className="image-description">
                <h5>AI Consulting</h5>
                <p>
                  Our AI consulting services help businesses understand how to integrate AI technologies into their operations effectively.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-right">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <img src={innovation} alt="Custom AI Solutions" className="gallery-image" />
              <div className="image-description">
                <h5>Custom AI Solutions</h5>
                <p>
                  We work closely with our clients to tailor these solutions to their unique needs, ensuring they achieve optimal results and a competitive edge.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <img src={plan} alt="Data Analytics" className="gallery-image" />
              <div className="image-description">
                <h5>Data Analytics</h5>
                <p>
                  Our data analytics services provide deep insights into your business data to support strategic decision-making.
                </p>
              </div>
            </motion.div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <motion.div
              className="gallery-item"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              <img src={auto} alt="Process Automation" className="gallery-image" />
              <div className="image-description">
                <h5>Process Automation</h5>
                <p>
                  By automating repetitive tasks and workflows, we help businesses reduce manual effort and minimize errors. Our solutions are designed to seamlessly integrate with existing systems, providing a smooth transition to increased efficiency and effectiveness.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
        <Row className="additional-details">
          <Col md={12} data-aos="fade-up">
            <motion.p
              className="services-details-text"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 1 }}
            >
              Our team is dedicated to delivering exceptional results through innovative AI technologies. From consulting to custom solutions and automation, we provide a comprehensive suite of services to help you stay ahead in a competitive landscape.
            </motion.p>
          </Col>
        </Row>
        {/* Contact Us Button */}
        <Row className="contact-us-section">
          <div className="contact-us-button">
            <Button variant="primary" size="lg" href="/contact">
              Contact Our Best Consultants!
            </Button>
          </div>
        </Row>
      </Container>

      <div className="space">
       
      </div>

     
    </div>
  );
};

export default Services;
