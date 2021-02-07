import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

import Accordion from 'react-bootstrap/Accordion'

function Trainingproject(){
    return(
        <div className="fullheight">
        <Container>
            <Row>
                <Col className="contmargin">
                <h3>Training:</h3>
                <p>Summer vocational training from telecommunication and signal department in
Indian Railway (DRM), Kota, Rajasthan.</p>
                </Col>
            </Row>
            <Row>
                <Col className="contmargin">
                <h3>Projects:</h3>
                <Accordion className="contmargin" defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Project 1: Building Resume Application using Reactjs
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body><h5>Publish Link:</h5> 
          <Link to="https://abhay0480-eng.github.io/Abhayresume/">https://abhay0480-eng.github.io/Abhayresume/</Link>
          <h5>Github Repositiory:</h5>
          <Link to="https://github.com/abhay0480-eng/Abhayresume">Go to git Repo</Link>
      
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Project 2: A mini project/application called ‘Rolodex-Monster’ using React.js.
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <h5>Publish Link:</h5>
          <Link to="https://abhay0480-eng.github.io/monster/">https://abhay0480-eng.github.io/monster/</Link>
          <h5>Github Repositiory:</h5>
          <Link to="https://github.com/abhay0480-eng/monster">Go to Repositiory</Link>


      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
                
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Trainingproject;