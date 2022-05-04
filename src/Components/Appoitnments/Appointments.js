import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Appointments.css';

const Appointments = () => {
    return (
        <div>

            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Select Department</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Gynaecology</option>
                            <option>Cardiology</option>
                            <option>Orthopaedics</option>
                            <option>Medicine</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Choose Doctor By Name</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Naidan Smith</option>
                            <option>Danial Frankie</option>
                            <option>Jason Roy</option>
                            <option>Alexa John</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Write Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Patient Name" />
                    </Form.Group>
                    <br />
                    <br />
                    <Form.Group className='form-box' controlId="formGridAddress1">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='text' placeholder="Patient Number" />
                    </Form.Group>
                    <br />

                    <Form.Group className='form-box' controlId="formGridAddress2">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="example@mail.com" />
                    </Form.Group>
                    <Form.Group controlId="formGridAddress2">
                        <Form.Label></Form.Label>
                        <Form.Control type="text" placeholder="Type Appointment Note" />
                    </Form.Group>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Old Patient?" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>


                </Row>


            </Form>
        </div>
    );
};

export default Appointments;