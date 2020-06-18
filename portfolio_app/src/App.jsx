import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import WebApps from './components/WebApps'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer'
import MyArt from './components/MyArt/MyArt';

function App() {

  return (
    <> 
      <Header />
      <Switch>

        <Route path='/' exact>
          <Home/>
        </Route>

        <Route path='/about' exact>
          <AboutMe/>
        </Route>

        <Route path= '/webapps' exact>
          <WebApps/>
        </Route>
          
        <Route path= '/contact' exact>
          <ContactMe/>
        </Route>

        <Route path= '/resume' exact>
          <Resume/>
        </Route>
          
        <Route path= '/myart' exact>
          <MyArt/>
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
