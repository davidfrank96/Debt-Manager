import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";

import { Provider } from "react-redux";
import Store from "./Store";

import AppNavbar from "./Components/Layouts/AppNavbar";
import Dashboard from "./Components/Layouts/Dashboard";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Router>
          <div className="App">
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
