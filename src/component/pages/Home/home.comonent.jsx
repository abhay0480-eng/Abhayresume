import React from 'react';
import './home.styles.css';
import logo from '../../../assets/abhay.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {FaLinkedinIn, FaPhoneAlt, FaGithub, FaInstagram } from "react-icons/fa";
import {SiGmail  } from "react-icons/si";

class Resumebuilder extends React.Component{

    
    
    render(){
        return(
            <div className="fullheight">
               <Container  >
                    <Row className=" conatiner">
                        <Col className="contmargin" sm={12}>
                         <img  className=" imge rounded img-thumbnail mx-auto d-block img-fluid " src={logo} alt="Profile pic"/>
                          <h3 className=" display-4 text-center text-break">ABHAY KUMAR</h3>
                          <ul class="nav justify-content-center listmargin">
    <li class="nav-item listspace">
    <a href="tel:7073271758"><FaPhoneAlt size="25px" color="black" /></a>
    </li>
    <li class="nav-item listspace">
    <a href="mailto:abhay0480sharma@gmail.com"><SiGmail size="25px" color="black" /></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://www.linkedin.com/in/abhay-kumar-587617155/"><FaLinkedinIn size="25px" color="black"/></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://github.com/abhay0480-eng"><FaGithub  size="25px"color="black"/></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://www.instagram.com/marcopolo103/"><FaInstagram size="25px" color="black"/></a>
    </li>
  </ul>
                        
                        </Col>
                    </Row>

                   
                </Container>     
                    
                   
            </div>
                
          
        );
    }
   
}

export default Resumebuilder;