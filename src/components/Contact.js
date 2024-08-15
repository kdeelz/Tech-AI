import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send the data to an API)
    console.log('Form data submitted:', formData);
  };

  return (
    <div style={styles.contactSection}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 style={styles.contactTitle}>Contact Us</h2>
            <p style={styles.contactText}>Have questions or need support? Reach out to us using the form below.</p>
            <Form onSubmit={handleSubmit} style={styles.contactForm}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  contactSection: {
    padding: '80px 0',
    backgroundColor: '#f9f9f9',
  },
  contactTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  contactText: {
    fontSize: '1.2rem',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#666',
  },
  contactForm: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
  },
};

export default Contact;
