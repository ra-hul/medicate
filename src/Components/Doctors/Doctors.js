import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import doc1 from '../../images/doctor-1.jpg'
import doc2 from '../../images/doctor-2.jpg'
import doc3 from '../../images/doctor-3.jpg'
import doc4 from '../../images/doctor-4.jpg'
import doc5 from '../../images/doctor-5.jpg'
import doc6 from '../../images/doctor-6.jpg'
import './Doctors.css';

const Doctors = () => {
    return (
        <div>
           <CardGroup>
  <Card className="doc" >
    <Card.Img variant="top" src={doc1} />
    <Card.Body>
      <Card.Title>Dr. Naidan Smith</Card.Title>
      <Card.Text>
      Doctor of Osteopathic Medicine || D.O. || Pharm.D. ||
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
  <Card className="doc">
    <Card.Img variant="top" src={doc2} />
    <Card.Body>
      <Card.Title>Dr. Danial Frankie</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
  <Card className="doc">
    <Card.Img variant="top" src={doc3} />
    <Card.Body>
      <Card.Title>Dr. Kethorin</Card.Title>
      <Card.Text>
      Doctor of Psychology || D.Psy/Psy.D || Doctor of Speech-Language Pathology
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
  <Card className="doc">
    <Card.Img variant="top" src={doc4} />
    <Card.Body>
      <Card.Title>Dr. Jason Roy</Card.Title>
      <Card.Text>
      Bachelor of Medicine, Bachelor of Surgery || MBBS, BMBS
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
  <Card className="doc">
    <Card.Img variant="top" src={doc5} />
    <Card.Body>
      <Card.Title>Dr. Alexa John</Card.Title>
      <Card.Text>
      D.Ac. || D.A.T || Au.D. || D.M. (DM), also in Latin
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
  <Card className="doc">
    <Card.Img variant="top" src={doc6} />
    <Card.Body>
      <Card.Title>Dr. Nilima</Card.Title>
      <Card.Text>
      D.C.||M.D.||P.M.||D.S.M. ||D.W.S. || Dr. eth. med
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="/Appointments">
    <Button  >Book Your Time </Button> 
    </Link>
    </Card.Footer>
  </Card>
</CardGroup>
        </div>
    );
};

export default Doctors;