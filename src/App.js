import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Resumebuilder from './component/pages/Home/home.comonent';
import Myresume from './component/pages/MyResume/resume.component';
import Pageheader from './component/pageheader/pageheader.component';
import './App.css';


function App(){
  return(
    <div >
    <Pageheader/>
     <Switch>
       <Route exact path='/' component={Resumebuilder}/>
       <Route exact path='/myresume' component={Myresume}/>
    
      </Switch>
      </div>
      
  )
}


export default App;
