import React from 'react';
import './Hobbies.styles.css';
import Head from '../HeadingComponent/heading.component';

function Hobbies(){
    return(
        <div>
       <Head heading="Intersets and Hobbies"/>
        
                <ul>
                    <li>
                       
                          <p className="textlayout A">Travelling</p>        
                          
                    </li>
                    <li>
                         <p className="textlayout B"> Photography</p>
                    </li>
                    <li>
                         <p className="textlayout B">Reading Books </p>
                    </li>
                </ul>
            
        </div>
    )
}
export default Hobbies;