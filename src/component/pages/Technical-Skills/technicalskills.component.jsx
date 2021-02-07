import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import './technicalskills.styles.css';



class Technicalskills extends React.Component{
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
                    <h3>Technical Skills:</h3>
                    </Col>
                </Row>
                
                <Row>
                    <Col className="contmargin" sm={5}>
                    <ListGroup>
                      <ListGroup.Item variant="dark"  action onClick={()=>this.setState({Name:'Windows, Microsoft Office'})}>Operating System</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'C-Language, C++, Javascript'})}>Computer Language</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'HTML, CSS, Bootstrap, Reactjs'})}>Web Development Technologies</ListGroup.Item>
                      <ListGroup.Item variant="dark" action onClick={()=>this.setState({Name:'GIT, Github, Visual Studio Code, Adobe Premier Pro'})}>Other Skills</ListGroup.Item>
</ListGroup>
                    </Col>
                    <Col className="contmargin " sm={7}>
                    
                    <h2 className=" color text-center">{this.state.Name}</h2>
                   
                    </Col>
                </Row>
            </Container>
            
        </div>
        )
    }
}

export default Technicalskills;
