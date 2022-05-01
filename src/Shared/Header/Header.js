import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "../../images/navbar.jpg";
import './Header.css'



const Header = () => {
    return (
        <div>
            <header>

                <img src={logo} alt="" />

                <Navbar className='Nav' sticky="top" >
                    <Link to="/home">Home</Link>
                    <Link to="/service">Service</Link>
                    <Link to="/gallery">Gallery</Link>
                    <Link to="/Appointments">Appointments</Link>
                    <Link to="/Doctors">Doctors</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact_us">Contact Us</Link>
                    <Link to="/login">Login</Link>


                </Navbar>

            </header>
        </div>
    );
};

export default Header;