import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Resumebuilder from './component/pages/Home/home.comonent';
import './App.css';
import Pageheader from './component/pageheader/pageheader.component';
import Information from './component/pages/Personal-Details/personaldetails.component';
import Qualification from './component/pages/Qualification/qualification.component';
import Technicalskills from './component/pages/Technical-Skills/technicalskills.component';
import Aboutme from './component/pages/About-Me/aboutme.component';
import Trainingproject from './component/pages/Training-and-Project/trainproject.component';

import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    
      <div className="height">
         <Pageheader/>
       <Switch>
     
       <Route exact path='/Abhayresume' component={Resumebuilder} />
       <Route path='/personaldetails' component={Information}/>
       <Route path='/qualification' component={Qualification}/>
       <Route path='/technicalskills' component={Technicalskills}/>
       <Route path='/aboutme' component={Aboutme}/>
       <Route path='/project' component={Trainingproject}/>
     
       </Switch>
     
      </div>
      
  )
}


export default App;
