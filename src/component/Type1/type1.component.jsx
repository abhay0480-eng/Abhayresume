import React from 'react';
import Head from '../HeadingComponent/heading.component';
import Content from '../ContentComponent/content.component';


function Type1(prop){
    return(
        <div className="Career">
          <Head heading= {prop.heading}/>
          <Content content= {prop.content}/>
        </div>
        
    )
}
export default Type1;