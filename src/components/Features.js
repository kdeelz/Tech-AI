import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import './css/Features.css';

const Features = () => {
  // Slick Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,  // Enable autoplay
    autoplaySpeed:1500,  // Set the speed of autoplay (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="features-section">
      <Container>
        <h2 className="features-heading">What We Offer</h2>
        <Slider {...settings}>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <motion.div
              className="feature-box"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="feature-title">Natural Language Processing (NLP)</h3>
              <p className="feature-text">
                Enabling computers to understand and interact with human language through chatbots, sentiment analysis, and more.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="feature-box"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="feature-title">Computer Vision</h3>
              <p className="feature-text">
                Developing applications for image and video recognition, object detection, and facial recognition.
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="feature-box"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="feature-title">AI-Powered Automation</h3>
              <p className="feature-text">
                Automating routine tasks and processes with AI, including workflow automation and intelligent document processing.
              </p>
            </motion.div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Features;
