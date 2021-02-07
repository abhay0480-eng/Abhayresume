import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Resumebuilder from './component/pages/Home/home.comonent';
import Myresume from './component/pages/MyResume/resume.component';
import './App.css';
import Pageheader from './component/pageheader/pageheader.component';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  return(
    
      <div className="height">
         <Pageheader/>
       <Switch>
     
       <Route exact path='/Abhayresume' component={Resumebuilder} />
       <Route  path='/myresume' component={Myresume}/>
       </Switch>
     
      </div>
      
  )
}


export default App;
