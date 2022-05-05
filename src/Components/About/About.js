import React from 'react';
import docGroup from './../../images/doctorgroup.jpg'
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const element = <FontAwesomeIcon icon={faBookMedical} />
    return (
        <div className='docgroup'>

            <img style={{ marginLeft: 'none', display: '100%' }} src={docGroup} alt="" srcset="" />

            <div className="">
                <p className='title'>What About Us </p>
                <h1>The Heart And Science Of Medic Test</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                    by injected humour or randomised words which don't look..</p>


                <div className="ul-order">
                    <div className="">
                        <ul style={{ marginLeft: "30px" }}>{element}Intervention Success</ul>
                        <ul style={{ marginLeft: "30px" }}>{element}Quality of Care Services</ul>
                        <ul style={{ marginRight: "25px" }}>{element}Client Satisfaction</ul>
                    </div>
                    <div className="">
                        <ul style={{ marginLeft: "30px" }}>{element}Happy with Staff</ul>
                        <ul style={{ marginLeft: "30px" }}>{element}Infection Prevention</ul>
                        <ul style={{ marginRight: "25px" }}>{element}Patient Experience</ul>
                    </div>
                </div>
                <h2>+8801775675786</h2>
                <p style={{ marginRight: '400px', color: '#0693e3' }}>Do you have any quetion?</p>
                <div className="">
                    <p className='title'>Our Services </p>

                </div>
            </div>
        </div>

    );
};

export default About;