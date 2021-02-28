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
                        <Col className="contmargin " sm={12}>
                        <div class="flip-card">
  <div class="flip-card-inner">
  <div class=" flip-card-front"  >
                          <img  className=" rounded img-thumbnail mx-auto d-block img-fluid " src={logo} alt="Profile pic"/>
                     <h5 class="card-title h1 text-center">Abhay Kumar</h5>
                          <p class="card-text h5 text-center">Web Development Enthusiast</p>
                         
                         
  </div>
 
  <div class="flip-card-back">
      <h4 style={{textAlign:'center'}}> Technical Skills</h4>
      <hr/>
    
          <ol>
              <li>
                HTML5
              </li>
              <li>
                CSS
              </li>
              <li>
                Bootstrap
              </li>
              <li>
                Javascript
              </li>
              <li>
                React.js
              </li>
              <li>
                C++
              </li>
              <li>
                GIT
              </li>
              <li>
                GitHub
              </li>
          </ol>
          
<div className="contact align-items-center" style={{backgroundColor:'slategrey'}}>
          <ul class="nav justify-content-center listmargin">
    <li class="nav-item listspace">
    <a href="tel:7073271758"><FaPhoneAlt size="20px" color="black" /></a>
    </li>
    <li class="nav-item listspace">
    <a href="mailto:abhay0480sharma@gmail.com"><SiGmail size="20px" color="black" /></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://www.linkedin.com/in/abhay-kumar-587617155/"><FaLinkedinIn size="20px" color="black"/></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://github.com/abhay0480-eng"><FaGithub  size="20px"color="black"/></a>
    </li>
    <li class="nav-item listspace">
    <a href="https://www.instagram.com/marcopolo103/"><FaInstagram size="20px" color="black"/></a>
    </li>
  </ul>
  </div>
 
  
    </div>
                         
                        
                          
    
  </div>
     
      </div>
                         
                        
                        </Col>
                    </Row>

                   
                </Container>     
                    
                   
            </div>
                
          
        );
    }
   
}

export default Resumebuilder;