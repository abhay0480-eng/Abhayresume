import React from 'react';
import {Link} from 'react-router-dom';
import './home.styles.css';


function Resumebuilder(){
    return(
        
        <div>
           
            <h1> Welcome Visiter  </h1>
            <div>
                <Link to='/myresume'><h2> My Resume  </h2></Link>
            </div>
            
        </div>
    )
}

export default Resumebuilder;