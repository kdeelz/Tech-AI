import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const data = {
      ...formData,
      access_key: "b3db6fe5-225f-4060-863b-a4c19017ba77",
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      toast.success('Message sent successfully!', {
        position: "top-center",
        autoClose: 3000,
      });

      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <motion.div
      style={styles.contactSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={12} lg={6}>
            <motion.h2
              style={styles.contactTitle}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Let's talk about your Project
            </motion.h2>
            <motion.p
              style={styles.contactText}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Have questions or need support? Reach out to us using the form below.
            </motion.p>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Form onSubmit={onSubmit} style={styles.contactForm}>
                <Form.Group controlId="formName" style={styles.formGroup}>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" style={styles.formGroup}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" style={styles.formGroup}>
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Type your message here"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" style={styles.submitButton}>
                  Send Message
                </Button>
              </Form>
            </motion.div>
          </Col>

          <Col md={12} lg={6}>
            <motion.div
              style={styles.detailsContainer}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1}}
              viewport={{ once: true }}
            >
              <h3 style={styles.detailsHeading}>Where Expectations Meet Excellence!</h3>
              <p style={styles.detailsText}>
                Professional web design experts. Looking for inspiration, creative solutions, opportunities, adventures 
                and most importantly a digital partner? You have come to the right place.
              </p>
              <a href="/" style={styles.homeLink}>Home</a>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </motion.div>
  );
};

const styles = {
  contactSection: {
    padding: '80px 20px',
    backgroundColor: '#f9f9f9',
    
  },

  contactTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  contactText: {
    fontSize: '1rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#666',
  },
  contactForm: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  detailsHeading: {
    fontSize: '50px',
    marginBottom: '15px',
  },
  detailsText: {
    fontSize: '1rem',
    color: '#666',
  },
  homeLink: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
  }
};

export default Contact;
