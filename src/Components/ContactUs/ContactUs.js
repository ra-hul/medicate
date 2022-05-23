import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import cover from '../../images/carosuel3.jpg'
import './ContactUs.css';

const ContactUs = () => {
   
    return (
        
        <div>
           <img style={{ marginLeft: 'none', display: '100%' }} src={cover} alt="" srcset="" />
           <Form>
               <h2>Get In Touch With Us</h2>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name" placeholder="Enter Name" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    
  </Row>

  <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="number" placeholder="Your Number" />
    </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>
  <Form.Group controlId="formGridAddress2">

<Form.Control className='appointment-textarea' type="text" placeholder="Type Appointment Note" />
</Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
        
    );
};

export default ContactUs;