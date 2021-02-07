
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './personaldetails.styles.css';



class Information extends React.Component{
    constructor(){
        super();
        this.state={
            Name:''
        }
    }

    render(){
        return(
            
        <div className="fullheight">
          
            <Container>
                <Row>
                    <Col className="contmargin">
                    <h3> Personal Details:</h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col className="contmargin" sm={5}>
                    <ListGroup>
                      <ListGroup.Item variant="dark"  action onClick={()=>this.setState({Name:'7/Nov/1993'})}>Date of Birth</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'Male'})}>Sex</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'Indian'})}>Nationality</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'Shankar vihar Colony Quarsi Ramghat Road, Aliagrh (Uttar Pradesh) Pincode: 202001'})}>Address</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'Hindi & English'})}>Language</ListGroup.Item>
</ListGroup>
                    </Col>
                    <Col className="contmargin " sm={7}>
                    
                    <h1 className=" color text-center">{this.state.Name}</h1>
                   
                    </Col>
                </Row>
            </Container>
            
        </div>
        )
    }
}

export default Information;
