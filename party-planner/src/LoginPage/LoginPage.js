import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import SignInForm from "./SignInForm";
import SignUpForm from ".//SignUpForm";

import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    return (
      <div className='LoginPage'>
        <div className='LoginPage__Aside'><h1>Party Planner</h1></div>
        <div className='LoginPage__Form'>
          {/* Header */}
          <div className='PageSwitcher'>
            <NavLink
              exact
              to='/'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'
            >
              Sign In
            </NavLink>
            <NavLink
              to='/sign-up'
              activeClassName='PageSwitcher__Item--Active'
              className='PageSwitcher__Item'
            >
              Sign Up
            </NavLink>
          </div>

          {/* Content */}
          <div className='FormTitle'>
            <NavLink
              exact
              to='/'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'
            >
              Sign In
            </NavLink>{" "}
            or{" "}
            <NavLink
              to='/sign-up'
              activeClassName='FormTitle__Link--Active'
              className='FormTitle__Link'
            >
              Sign Up
            </NavLink>
          </div>

          <Route path='/sign-up' component={SignUpForm} />
          <Route exact path='/' component={SignInForm} />
        </div>
      </div>
    );
  }
}

export default LoginPage;
