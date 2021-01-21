import React from 'react';
import './contact.styles.css'

function Contact(props){
    return(
     <div className="contact">
     <p >{props.info}</p>
     <p ><span className="head">Linkedin :</span> <a href="https://www.linkedin.com/in/abhay-kumar-587617155/">https://www.linkedin.com/in/abhay-kumar-587617155/</a></p>
     </div>
    );
}

export default Contact;