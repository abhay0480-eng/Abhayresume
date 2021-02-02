import React from 'react';
import './AddQualification.styles.css';
import Head from '../HeadingComponent/heading.component';
import Content from '../ContentComponent/content.component';

function Addqualification(){
    return(
        <div >
            <Head heading="Additional Qualification / Certification"/>
            <div className="Addi">
            <Content content="Google Digital Unlock:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Digital Marketing "/>

            <Content clasName="B" content="Google Analytics Academy:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Google Analytics for beginners"/>
            </div>
        </div>
    )
}

export default Addqualification;