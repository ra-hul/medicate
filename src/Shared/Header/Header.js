import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import logo from "../../images/navbar.jpg";

import './Header.css'



const Header = () => {
    return (
        <>


            <img src={logo} alt="" />
            <header>



                <Navbar className='Nav' variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand >Medicate</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href='/home'>Home</Nav.Link>
                            <Nav.Link href='/Appointments'>Appointments</Nav.Link>
                            <Nav.Link href='/about'>About</Nav.Link>
                            <Nav.Link href='contact_us'>Contact Us</Nav.Link>
                            <Nav.Link href='/doctors'>Doctors</Nav.Link>
                            <Nav.Link href='/login'>Login</Nav.Link>


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>


        </>
    );
};

export default Header;