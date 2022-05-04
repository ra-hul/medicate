import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Services.css';

const Services = ({ se }) => {
    const { title, details, title_1stLetter, image } = se;
    return (
        <div className='Card'>
            <CardGroup  >
                <Card className='Card-border'>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{ backgroundColor: '#0d47a1', color: 'white', padding: '5px', borderRadius: '5px' }}>{title}</Card.Title>
                        <Card.Text style={{ backgroundColor: '#8ed1fc', borderRadius: '5px' }}>
                            {details}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button>{title_1stLetter}</Button>
                    </Card.Footer>
                </Card>


            </CardGroup>
        </div>
    );
};

export default Services;