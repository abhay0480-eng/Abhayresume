import React from 'react';
import './content.styles.css';

function Content(props){
    const clas = props.clasName;
   
    if((clas) === "A")
   {
       return(
        <p className="textlayout A">{props.content}</p>   
       )
   }
   else if((clas) === "B"){
       
    return(
       <p className="textlayout B">{props.content}</p>
       )
    }
    else return <p className="textlayout ">{props.content}</p>
   

  
   
}
export default Content;
