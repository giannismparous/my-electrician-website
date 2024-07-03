// src/components/Contact.js
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="container mt-5 contact-container">
      <h2>Επικοινωνία</h2>
      <Form className="contact-form">
        <Form.Group controlId="formBasicName">
          <Form.Label>Όνομα</Form.Label>
          <Form.Control type="text" placeholder="Πληκτρολογήστε το όνομα σας" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Πληκτρολογήστε το email σας" />
        </Form.Group>
        <Form.Group controlId="formBasicMessage">
          <Form.Label>Κείμενο</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Πληκτρολογήστε το κείμενο σας" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Contact;
