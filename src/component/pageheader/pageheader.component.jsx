import React from 'react';
import './pageheader.styles.css';
import {Link} from 'react-router-dom';


function Pageheader(){
    return(
        <div>
             
                <Link className="mainheading" to='/Abhayresume'> Profile Picture </Link>
              
            
        </div>
    )
}

export default Pageheader;