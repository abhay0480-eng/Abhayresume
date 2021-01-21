import React from 'react';
import './project.styles.css';
import Head from '../HeadingComponent/heading.component';
import Content from '../ContentComponent/content.component';

function Project(){
    return(
        <div>
            <Head heading="Project"/>
            <p>
                <ul>
                    <li>
                           <Content  clasName="A" content="A mini project/application called ‘Rolodex-Monster’ using React.js."/>      
                           <p className="textlayout a"><span>  Github: </span><a href="https://abhay0480-eng.github.io/monster/" >https://abhay0480-eng.github.io/monster/ </a></p>
                           
                    </li>
                    <li>
                          <Content clasName="B" content="A major project / E-commerce application called ‘Crown-Clothing’ using React.js."/>
                          <p className="textlayout b"><span>Github: </span> 
                          <a href="https://github.com/abhay0480-eng/crwn-clothing/tree/master" >https://github.com/abhay0480-eng/crwn-clothing/tree/master </a></p>
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default Project;