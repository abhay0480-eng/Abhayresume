import React from 'react';

import Contact from './component/contanctinfo/contact.component';
import Name from './component/NameInfo/name.component';
import Resume from './component/resumeheading/resume.component';
import Type1 from './component/Type1/type1.component';
import Qualification from './component/Qualifications/qualifications.component';
import Project from './component/projects/project.components';
import Addqualification from './component/AdditionalQualification/AddQualification.component';
import Technicalskills from './component/TechnicalSkills/technical.component';
import Hobbies from './component/InterestHobbies/Hobbies.component';
import  PersonalDetails from './component/PersonalDetails/personaldetails.component';
import './App.css';


function App() {
  return (
    <div>
      <Resume/>
      <Name name="ABHAY KUMAR"/>
      <Contact info="+91 7073271758 | abhay0480sharma@gmail.com "/>
     
      <Type1 heading="Career Objective" content="To acquire a challenging job in the IT industry. I work to the best of my capabilities with the aim of leveraging my skill and experience towards professional growth. "/>
      
      <Qualification/>

      <Type1 heading="Training" content="Summer vocational training from telecommunication and signal department in Indian Railway (DRM), Kota, Rajasthan.
"/>   
      <Project/>
      <Addqualification/>
      <Technicalskills/>
      <Hobbies/>

      <Type1 heading="Competencies" content="I am a good decision maker, well-motivated, enthusiastic to learn, well at human relations, and have the ability to work in and with a team with effective and good communication skills"/>
      
      <PersonalDetails/>
      <Type1 heading="Declaration" content="I hereby declare all the information in the resume is true to my knowledge and belief."/>
      <p><span>Place:Aligarh</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span>Abhay Kumar</span></p>
    </div>
    
  )
}

export default App;
