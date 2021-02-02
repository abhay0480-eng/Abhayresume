import React from 'react';
import './pageheader.styles.css';
import {Link} from 'react-router-dom';
import logo from '../../assets/abhay.jpg'

function Pageheader(){
    return(
        <div>
             <div>
                <Link className="mainheading" to='/'> <img src={logo} alt="logo"/> </Link>
              
            </div>
        </div>
    )
}

export default Pageheader;