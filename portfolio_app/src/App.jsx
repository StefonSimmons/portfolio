import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'

function App() {
  return (
    <> 
      <Header />
      <Switch>

        <Route path='/' exact>
          <AboutMe/>
        </Route>

        <Route path= '/projects' exact>
          <Projects/>
        </Route>
          
        <Route path= '/contact' exact>
          <ContactMe/>
        </Route>

        <Route path= '/resume' exact>
          <Resume/>
        </Route>
          
      </Switch>
    </>
  );
}

export default App;
