import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";
import Store from './Store'
import Login from './components/Login';
import Users from './components/Users';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

function App() {
  return (
    <Store>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Store>
  );
}

export default App;
