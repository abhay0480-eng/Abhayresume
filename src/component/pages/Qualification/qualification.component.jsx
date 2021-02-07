import React from 'react';
import './qualification.styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import pdf from '../../../assets/googlecerti.pdf';

import Table from 'react-bootstrap/Table';

function Qualification(){
    return(
        <div className="fullheight">
            <Container>
                <Row>
                    <Col className="contmargin">
                    <h2>Qualification:</h2>
                    </Col>
                </Row>
            </Container>

        <Table className="container countmargin" striped bordered hover responsive="sm">
  <thead>
    <tr>
      <th></th>
      <th >Degree/Exam</th>
      <th>Board/University</th>
      <th>Institute/School</th>
      <th>Score</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>B.tech</td>
      <td>Rajasthan Technical University</td>
      <td>Modi Institute Of Technology</td>
      <td>71%</td>
    </tr>
    <tr>
      <td>2</td>
      <td>12th</td>
      <td>C.B.S.E.</td>
      <td>Zakir Hussain Model Sr. Sec. School</td>
      <td>59%</td>
    </tr>
    <tr>
      <td>3</td>
      <td>10th</td>
      <td>C.B.S.E.</td>
      <td>Heritage International School</td>
      <td>65%</td>
    </tr>
  </tbody>
</Table>

<Container>
                <Row>
                    <Col className="contmargin">
                    <h2>Additional Qualification / Certification:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="container countmargin">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title>Google Digital Unlocked</Card.Title>
    <Card.Text>
      I succesfully completed The Fundamental of Digital Marketing.
      Certificate ID: DZ9 JLR S83
    </Card.Text>
    <Button variant="primary" href="https://learndigital.withgoogle.com/digitalunlocked/validate-certificate-code">Validate this Certificate</Button>
    <Link to={pdf} target="_blank" download>Download</Link>
  </Card.Body>
</Card>
                    </Col>
                    
                    <Col className="container countmargin">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top"  />
  <Card.Body>
    <Card.Title>Google Analytics for Beginners</Card.Title>
    <Card.Text>
    I succesfully completed The Fundamental of Google Analytics
    </Card.Text>
    <Button variant="primary" href="https://analytics.google.com/analytics/academy/certificate/5rxeP1AqQ_ufRzOqjxGZQw">Certificate</Button>
  </Card.Body>
</Card>
                    </Col>
                </Row>
            </Container>
</div>
    )
    
}

export default Qualification;