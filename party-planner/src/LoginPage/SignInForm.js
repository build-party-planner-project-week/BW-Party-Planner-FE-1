import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import { login } from "../actions/loginActions";

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(res => {
      if(res){
        this.props.history.push('/parties')
      }
    })

    // console.log("The form was submitted with the following data:");

  }

  render() {

    return (
      <div className='FormCenter'>
        <form className='FormFields' onSubmit={this.handleSubmit}>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='username'>
              Username
            </label>
            <input
              type='text'
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
            <button className='FormField__Button mr-20'>
              {this.props.isLoggingIn ? (
                <Loader type='ThreeDots' color='black' height='12' width='26' />
              ) : (
                "Log in"
              )}
            </button>{" "}
            <Link to='/' className='FormField__Link'>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(SignInForm);
