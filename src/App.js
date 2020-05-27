import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Switch>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
