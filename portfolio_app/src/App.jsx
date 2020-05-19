import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'


function App() {
  return (
    <> 
      <Home />
      <Switch>

        <Route path='/' exact>
          <AboutMe/>
        </Route>

        <Route path= '/projects' exact>
          <Projects/>
        </Route>
          
        <Route path= '/contact-me' exact>
          <ContactMe/>
          </Route>
          
      </Switch>
    </>
  );
}

export default App;
