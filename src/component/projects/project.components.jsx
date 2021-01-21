import React from 'react';
import './project.styles.css';

function Project(){
    return(
        <div>
            <p className="heading">Project: </p>
            <p>
                <ul>
                    <li>
                       
                         <p className="textlayout A">A mini project/application called ‘Rolodex-Monster’ using React.js.</p>        
                           <p className="textlayout a"><span>  Github: </span><a href="https://abhay0480-eng.github.io/monster/" >https://abhay0480-eng.github.io/monster/ </a>
                           </p>
                    </li>
                    <li>
                         <p className="textlayout B"> A major project / E-commerce application called ‘Crown-Clothing’ using React.js.</p> <p className="textlayout b"><span>Github: </span> 
                        <a href="https://github.com/abhay0480-eng/crwn-clothing/tree/master" >https://github.com/abhay0480-eng/crwn-clothing/tree/master </a></p>
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default Project;