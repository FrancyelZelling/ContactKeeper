import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";

import Navbar from "./Components/Layout/Navbar";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Register from "./Components/Auth/Register";
import Login from "./Components/Auth/Login";
import Alerts from "./Components/Layout/Alerts";
import PrivateRoute from "./Components/routing/PrivateRoute";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};
export default App;
