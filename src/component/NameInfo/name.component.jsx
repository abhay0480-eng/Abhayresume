import React from 'react';
import './Name.styles.css';

function Name(pro){
    return(
        <div className="h">
        <h1>{pro.name}</h1>
       <hr/>
        </div>
      
    )
}

export default Name;