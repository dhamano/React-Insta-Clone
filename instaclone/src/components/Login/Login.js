import React from 'react';

import instagramWordmark from '../../img/instagram-wordmark.png';

import './login.scss';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false
  }

  fieldInputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  login = event => {
    event.preventDefault();
    if(localStorage.getItem("instacloneLogin")) {
      localStorage.setItem("instacloneLogin", false);
      this.setState({
        loggedIn: false
      })
    } else {
      localStorage.setItem("instacloneLogin", true);
      this.setState({
        loggedIn: true
      })
    }
    this.props.loggedIn();
  }

  render() {
    console.log(this.props.loggedIn);
    return (
      <form onSubmit={this.login}>
        <img src={instagramWordmark} className="wordmark" alt="Instagram Wordmark" />
        <input value={this.state.username} onChange={this.fieldInputHandler} type="text" name="username" id="username" placeholder="username" />
        <input value={this.state.password} onChange={this.fieldInputHandler} type="password" minLength="8" name="password" id="password" placeholder="password" />
        <button type="submit" name="submit">Login</button>
      </form>
    )
  }
}

export default Login;