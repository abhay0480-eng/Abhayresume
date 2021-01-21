import React from 'react';

import Contact from './component/contanctinfo/contact.component';
import Name from './component/NameInfo/name.component';
import Resume from './component/resumeheading/resume.component';
import CareerObj from './component/careerobjective/career.component';
import Qualification from './component/Qualifications/qualifications.component';
import Train from './component/training/training.component';
import Project from './component/projects/project.components';
import Addqualification from './component/AdditionalQualification/AddQualification.component';
import Technicalskills from './component/TechnicalSkills/technical.component';
import Hobbies from './component/InterestHobbies/Hobbies.component';
import Competencies from './component/Competencies/competencies.component';
import  PersonalDetails from './component/PersonalDetails/personaldetails.component';
import Declaration from './component/Declaration/declaration.component';
import './App.css';


function App() {
  return (
    <div>
      <Resume/>
      <Name name="ABHAY KUMAR"/>
      <Contact info="+91 7073271758 | abhay0480sharma@gmail.com "/>
      <CareerObj/>
      <Qualification/>
      <Train/>
      <Project/>
      <Addqualification/>
      <Technicalskills/>
      <Hobbies/>
      <Competencies/>
      <PersonalDetails/>
      <Declaration/>
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
