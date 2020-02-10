import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "antd/dist/antd.css";
import Login from './components/Login';
import Users from './components/Users';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </Router>
  );
}

export default App;
