import React from 'react';
import {Link} from 'react-router-dom';
import './home.styles.css';
import logo from '../../../assets/abhay.jpg';


function Resumebuilder(){
    return(
        
        <div>
           
           
            <div>
                <Link to='/myresume'>
                    <img src={logo} alt="Profile pic"/>
                    <h1> MY RESUME  </h1>
                    </Link>
            </div>
            
        </div>
    )
}

export default Resumebuilder;