import React from 'react';
import './pageheader.styles.css';
import {Link} from 'react-router-dom';
import resume from '../../assets/Resume2021.pdf';





function Pageheader(){
    return(
     <div>
        <nav className="navbar navbar-expand-md  bg-secondary navbar-dark">
        
        <Link  className="navbar-brand"  to='/Abhayresume'> RESUME</Link>
        
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
          
          <ul className="navbar-nav">

          <li className="nav-item active ">
              <Link className="nav-link" to={resume} target="_blank" download>Download Resume</Link>
            </li>

            <li className="nav-item  ">
              <Link className="nav-link" to='/aboutme'>About Me</Link>
            </li>
            
          <li className="nav-item  ">
              <Link className="nav-link" to='/qualification'>Qualification</Link>
            </li>

            <li className="nav-item  ">
              <Link className="nav-link" to='/technicalskills'>Technical Skills</Link>
            </li>

            <li className="nav-item  ">
              <Link className="nav-link" to='/project'>Training and Project</Link>
            </li>


            <li className="nav-item  ">
              <Link className="nav-link" to='/personaldetails'>Personal Details</Link>
            </li>
            
            

          </ul>
          </div>  
        </nav>
        
  
        </div>
            
     
    )
}

export default Pageheader;