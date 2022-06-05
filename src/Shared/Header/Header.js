import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import logo from "../../images/navbar.jpg";

import './Header.css'



const Header = () => {
    const {user,logOut} = useFirebase();
    return (
        <>


            <img src={logo} alt="" />
            <header>



                <Navbar className='Nav' variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container>
                        <Navbar.Brand >Medicate</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link href='/home' className='text'>Home</Nav.Link>
                            <Nav.Link href='/Appointments' className='text'>Appointments</Nav.Link>
                            <Nav.Link href='/about' className='text'>About</Nav.Link>
                            <Nav.Link href='/ContactUs' className='text'>Contact Us</Nav.Link>
                            <Nav.Link href='/doctors' className='text'>Doctors</Nav.Link>
                            {
                                user.email?
                                <Button onClick={logOut}>log out</Button>
                                :
                                <Nav.Link href='/login' className='text'>Login</Nav.Link>
                                }


                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>


        </>
    );
};

export default Header;