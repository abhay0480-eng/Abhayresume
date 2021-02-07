import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

function Aboutme(){
    return(
        <div className="fullheight">
            <Container>
            <Row >
                    <Col className="container contmargin">
                      <h3>Introduction:</h3>
                      <p>Hello, My name is Abhay Kumar. I am a good decision maker, well-motivated, enthusiastic to learn, well at human
relations, and have the ability to work in and with a team with effective and good
communication skills.
                      </p>
                    </Col>
                </Row>
                <Row >
                    <Col className="container contmargin">
                      <h3>Career Objective:</h3>
                      <p>To acquire a challenging job in the IT industry. I work to the
best of my capabilities; with the aim of leveraging my skill and experience towards
professional growth.</p>
                    </Col>
                </Row>
                <Row className="container"> 
                    <Col className="contmargin">
                    <h3>Hobbies and Interests:</h3>
                    <ListGroup>
  
  <ListGroup.Item action variant="secondary">Travelling</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Photography
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Reading Books
  </ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Computer Games
  </ListGroup.Item>
</ListGroup>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutme;