import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Apps from './components/Apps'
import ContactMe from './components/ContactMe'
// import Resume from './components/Resume/Resume'
import Footer from './components/Footer'
import MyArt from './components/MyArt/MyArt';

function App() {
  const [role, changeRole] = useState('Software Engineer')




  return (
    <>
      <Header
        role={role}
      />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/about' exact>
          <AboutMe />
        </Route>

        <Route path={['/apps', '/web-apps', '/webapps']} exact>
          <Apps />
        </Route>

        <Route path='/contact' exact>
          <ContactMe />
        </Route>

        {/* <Route path='/resume' exact>
          <Resume />
        </Route> */}

        <Route path={['/myart', '/art']} exact>
          <MyArt
            changeRole={changeRole}
          />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
