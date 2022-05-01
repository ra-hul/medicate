import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Services.css';

const Services = ({ se }) => {
    const { title, details, title_1stLetter, image } = se;
    return (
        <div className='Card'>
            <CardGroup  >
                <Card className='Card-border'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text style={{ backgroundColor: '#8ed1fc', borderRadius: '5px' }}>
                            {details}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{title_1stLetter}</small>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </div>
    );
};

export default Services;