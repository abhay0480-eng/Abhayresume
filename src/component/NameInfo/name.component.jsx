import React from 'react';
import './Name.styles.css';

function Name(pro){
    return(
        <div className="heading">
        <h1>{pro.name}</h1>
        <hr ></hr>
        </div>
    )
}

export default Name;