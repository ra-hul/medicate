import React from 'react';
import { Button, Col, Form, } from 'react-bootstrap';
import './Appointments.css';
import doctor from '../../images/doctor-.png'

const Appointments = () => {
    return (
        <div className='appointment'>


            <Form className='Form'>

                <Form.Group className='form-box' as={Col} controlId="formGridState">
                    <Form.Label>Select Department</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Gynaecology</option>
                        <option>Cardiology</option>
                        <option>Orthopaedics</option>
                        <option>Medicine</option>
                    </Form.Select>
                </Form.Group>
                <br />

                <Form.Group className='form-box' as={Col} controlId="formGridState">
                    <Form.Label>Choose Doctor By Name</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>Naidan Smith</option>
                        <option>Danial Frankie</option>
                        <option>Jason Roy</option>
                        <option>Alexa John</option>
                    </Form.Select>
                </Form.Group>



                <Form.Group as={Col} className="form-box" controlId="formGridEmail">
                    <Form.Label>Write Your Name</Form.Label>
                    <Form.Control type="name" placeholder="Patient Name" />
                </Form.Group>
                <Form.Group className='form-box' controlId="formGridAddress1">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='text' placeholder="Patient Number" />
                </Form.Group>


                <Form.Group className='form-box' controlId="formGridAddress2">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control type="email" placeholder="example@mail.com" />
                </Form.Group>
                <br />
                <br />
                <Form.Group controlId="formGridAddress2">

                    <Form.Control className='appointment-textarea' type="text" placeholder="Type Appointment Note" />
                </Form.Group>



                <Button className='submit-box' variant="primary" type="submit">
                    Submit
                </Button>


            </Form>
            <img style={{ height: '500px', width: '500px', marginLeft: "200px" }} src={doctor} alt="" />
        </div>
    );
};

export default Appointments;