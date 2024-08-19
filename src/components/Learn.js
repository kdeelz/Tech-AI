import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link as ScrollLink, Element } from 'react-scroll';
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/Learn.css';
import team from './Photos/team.png';
import innovation from './Photos/innovation.jpg';
import plan from './Photos/plan.jpg';
import data from './Photos/data.png';
import Navbar from './Navbar';

const Learn = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="learn-section">
      
       {/* Hero Section */}
       <div className="hero-section-learn">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <h1 className="hero-title-learn">Empowering Innovation with AI</h1>
              <p className="hero-subtitle-learn">
              At Tech AI, we are dedicated to transforming businesses through cutting-edge artificial intelligence solutions. Our team of experts is committed to delivering innovative services that drive growth and efficiency.
              </p>
             
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md={12} data-aos="fade-up">
            <h2 className="learn-title">Why Choose Tech AI</h2>
            <p className="learn-text">
              At Tech AI, we are passionate about leveraging the power of artificial intelligence to transform the way businesses operate. Our expert team provides innovative solutions in automation, data analytics, and AI consulting, tailored to meet the unique needs of our clients.
            </p>
            <p className="learn-text">
              Our mission is to deliver high-quality AI-driven solutions that drive efficiency, improve decision-making, and foster innovation across industries. We believe in the limitless possibilities of AI and are committed to helping businesses unlock their full potential.
            </p>
          </Col>
        </Row>
        <Row className="image-gallery">
          <Col md={3} data-aos="fade-right">
            <div className="gallery-item">
              <img src={team} alt="Team Collaboration" className="gallery-image" />
              <div className="image-description">
                <h5>Team Collaboration</h5>
                <p>
                  Fostering a culture of collaboration is key to innovation. Our diverse team works together to create solutions that drive success.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} data-aos="fade-right">
            <div className="gallery-item">
              <img src={innovation} alt="AI Innovation" className="gallery-image" />
              <div className="image-description">
                <h5>AI Innovation</h5>
                <p>
                  Pioneering new AI technologies, we stay ahead of the curve to bring the latest advancements to our clients.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <div className="gallery-item">
              <img src={plan} alt="Strategic Planning" className="gallery-image" />
              <div className="image-description">
                <h5>Strategic Planning</h5>
                <p>
                  Our strategic planning process is grounded in data-driven insights, ensuring that every decision supports long-term growth.
                </p>
              </div>
            </div>
          </Col>
          <Col md={3} data-aos="fade-left">
            <div className="gallery-item">
              <img src={data} alt="Data Analysis" className="gallery-image" />
              <div className="image-description">
                <h5>Data Analysis</h5>
                <p>
                  Leveraging advanced data analytics, we uncover actionable insights that drive informed business decisions.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="additional-details">
          <Col md={12} data-aos="fade-up">
            <p className="learn-details-text">
              At Tech AI, our team is driven by innovation, collaboration, and strategic planning to deliver cutting-edge solutions. We believe in harnessing the power of data to make informed decisions that propel businesses forward.
            </p>
            <p className="learn-details-text">
              Whether you're looking to automate processes, gain insights through data analytics, or explore AI-driven strategies, Tech AI is here to help you navigate the complexities of today's digital landscape.
            </p>
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

       {/* Contact Section */}
     <Element name="footer-section">
        <Footer />
      </Element>

    </div>
  );
};

export default Learn;
