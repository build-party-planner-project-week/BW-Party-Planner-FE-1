import React from "react";

import "./styles/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./utility/PrivateRoute";
import LoginPage from "./LoginPage/LoginPage";
import Home from "./views/Home";

import "./LoginPage/LoginPage.css";

function App() {
  return (
    <Router>
      <div className='App'>
        {/* <LoginPage /> */}
        <PrivateRoute path='/parties' component={Home} />
        {/* Sign in/Up */}
        <Route exact path='/sign-up' component={LoginPage} />
        <Route exact path='/' component={LoginPage} />
      </div>
    </Router>
  );
}

export default App;
