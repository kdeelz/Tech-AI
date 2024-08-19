import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();

    // Prepare form data
    const data = {
      ...formData,
      access_key: "b3db6fe5-225f-4060-863b-a4c19017ba77",  // Replace with your actual Web3Forms access key
    };

    // Send form data to the Web3Forms API
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
      // Show success toast notification
      toast.success('Message sent successfully!', {
        position: "top-center",  // Position changed to string
        autoClose: 3000, // Close after 3 seconds
      });

      // Optionally, you can clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      // Show error toast notification
      toast.error('Failed to send message. Please try again.', {
        position: "top-center",  // Position changed to string
        autoClose: 3000,
      });
    }
  };

  return (
    <div style={styles.contactSection}>
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 style={styles.contactTitle}>Contact Us</h2>
            <p style={styles.contactText}>Have questions or need support? Reach out to us using the form below.</p>
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
          </Col>
        </Row>
      </Container>
      <ToastContainer />
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
