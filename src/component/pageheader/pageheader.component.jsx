import React from 'react';
import './pageheader.styles.css';
import {Link} from 'react-router-dom';


function Pageheader(){
    return(
        <div>
             <div>
                <Link className="mainheading" to='/'> HOME </Link>
              
            </div>
        </div>
    )
}

export default Pageheader;