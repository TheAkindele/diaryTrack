import React from 'react';
import { Route, Switch } from 'react-router-dom'
//import NavBar from './components/navFolder/Navbar'
import Dashboard from './components/homepageFolder/dashboardFolder/Dashboard'
import Event from './components/eventFolder/Event'
import NewEvent from './components/createEventFolder/NewEvent'
import SignIn from './components/signInAndOutFolder/SignIn'
import SignUp from './components/signInAndOutFolder/SignUp'
import './App.scss'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/event/:eventId' component={Event} />
        <Route path='/new-event' component={NewEvent} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
