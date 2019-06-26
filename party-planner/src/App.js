import React from "react";

import "./styles/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './utility/PrivateRoute'
import LoginPage from './LoginPage/LoginPage'
import SignUpForm from './LoginPage/SignUpForm';
import SignInForm from './LoginPage/SignInForm';
import Home from './views/Home'


function App() {
  return (
    <Router>
      <div className="App">
        {/* <LoginPage /> */}
        <PrivateRoute path="/parties" component={Home} />
        {/* <Route path='/parties' component={Home} /> */}
        <Route  exact path="/sign-in" component={LoginPage} />
        {/* <Home /> */}
        <Route exact path="/" component={SignUpForm}>
              </Route>
              <Route exact path="/sign-in" component={SignInForm}>
              </Route>
      </div>
    </Router>
  );
}

export default App;
