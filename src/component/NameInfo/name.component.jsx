import React from 'react';
import './Name.styles.css';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class PersonalDetails extends React.Component{

    constructor(){
        super();
        this.state={
            Name: ''
        }
    }
    render(){
        return(
            <Container>
            <Row>
            <Col className="margintop" sm={6}>
            <Row>
                <Col>
                <h2 className="pad"> Personal Infomation</h2>
                </Col>
            </Row>
            <Row> 
                <Col >
                <Button className="position" onClick={()=>this.setState({Name:'7/Nov/1993'})} variant="outline-dark">Date Of Birth</Button>
                </Col>
                <Col >
                <Button className="position" onClick={()=>this.setState({Name:'Shankar Vihar Colony, Quarsi Ramghat Road Aligarh (Uttar Pradesh)'})} variant="outline-dark">Address</Button>
                </Col>
                <Col >
                <Button className="position" onClick={()=>this.setState({Name:'Hindi & English'})} variant="outline-dark">Language</Button>
                </Col>
                </Row>
                <Row>
                    <Col>
                <h3 className="  text-center text-break">{this.state.Name}</h3>
                </Col>
                </Row>
        </Col>

        </Row>
        </Container>
    
    
    
          
        )

    }
   
}

export default PersonalDetails;