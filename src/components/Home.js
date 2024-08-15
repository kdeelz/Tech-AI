import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import backgroundai from './Photos/Backgroundai.png'


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section" style={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 style={styles.heroTitle}>Welcome to AI Technology</h1>
              <p style={styles.heroText}>
                Pioneering the future with cutting-edge artificial intelligence solutions.
              </p>
              <Button variant="primary" style={styles.heroButton}>Learn More</Button>
            </Col>
            <Col md={6}>
              {/* Here you can add an image or illustration */}
              <img
                src={backgroundai}
                alt="backgroundai"
                style={styles.heroImage}
              />
           



            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <div className="features-section" style={styles.featuresSection}>
        <Container>
          <Row>
            <Col md={4}>
              <div style={styles.featureBox}>
                <h3 style={styles.featureTitle}>Feature One</h3>
                <p style={styles.featureText}>Innovative AI-powered solutions to revolutionize industries.</p>
              </div>
            </Col>
            <Col md={4}>
              <div style={styles.featureBox}>
                <h3 style={styles.featureTitle}>Feature Two</h3>
                <p style={styles.featureText}>Intelligent automation to streamline your business processes.</p>
              </div>
            </Col>
            <Col md={4}>
              <div style={styles.featureBox}>
                <h3 style={styles.featureTitle}>Feature Three</h3>
                <p style={styles.featureText}>Data-driven insights for smarter decision-making.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Section */}
      <footer className="footer" style={styles.footer}>
        <Container>
          <Row>
            <Col md={6}>
              <p>&copy; 2024 AI Technology. All rights reserved.</p>
            </Col>
            <Col md={6} className="text-md-right">
              <p>Privacy Policy | Terms of Service</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

const styles = {
  heroSection: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    padding: '100px 0',
    textAlign: 'left',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
  },
  heroButton: {
    padding: '10px 20px',
    fontSize: '1rem',
  },
  heroImage: {
    width: '100%',
    borderRadius: '10px',
  },
  featuresSection: {
    padding: '60px 0',
  },
  featureBox: {
    padding: '20px',
    textAlign: 'center',
  },
  featureTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  featureText: {
    fontSize: '1rem',
    color: '#666',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
  },
};

export default Home;
