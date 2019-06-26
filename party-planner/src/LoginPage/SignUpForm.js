import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../actions/loginActions";
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      name: "",
      hasAgreed: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    this.props.register({ username, password });
  }

  render() {
    return (
      <div className='FormCenter'>
        <form onSubmit={this.handleSubmit} className='FormFields'>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='name'>
              Full Name
            </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your full name'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div className='FormField'>
            <label className='FormField__Label' htmlFor='username'>
              E-Mail Address
            </label>
            <input
              type='username'
              id='username'
              className='FormField__Input'
              placeholder='Enter your username'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='password'>
              Password
            </label>
            <input
              type='password'
              id='password'
              className='FormField__Input'
              placeholder='Enter your password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <div className='FormField'>
            <button className='FormField__Button mr-20'>Sign Up</button>{" "}
            <Link to='/sign-in' className='FormField__Link'>
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { register }
)(SignUpForm);
