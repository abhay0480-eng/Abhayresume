import React from 'react';
import './headings.styles.css';


function Head(props){
    return(
       
            <p className="heading">{props.heading}:</p>
       
    )
}

export default Head;