import React, { useEffect, useState } from 'react';
import Services from '../Services/Services';
import './Service.css';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    return (
        <div className='serivices-container backGround'>
            {
                service.map(se => <Services
                    key={se.id}
                    se={se}>

                </Services>)
            }
        </div>
    );
};

export default Service;