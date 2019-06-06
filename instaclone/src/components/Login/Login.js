import React from 'react';

import instagramWordmark from '../../img/instagram-wordmark.png';

import './login.scss';

class Login extends React.Component {
  state = {
    username: '',
    password: '',
    userInfo: {
      loggedIn: false,
      username: 'anonymous'
    },
    errorUser: false,
    errorPass: false
  }

  fieldInputHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  login = event => {
    event.preventDefault();
    if(this.state.username.length < 2) {
      this.setState({
        errorUser: true
      });
      return false;
    } else {
      this.setState({
        errorUser: false
      });
    }
    event.preventDefault();
    if(this.state.password.length < 8) {
      this.setState({
        errorPass: true
      });
      return false;
    } else {
      this.setState({
        errorPass: false
      });
    }
    let userInfoVal = {
      loggedIn: !this.state.userInfo.loggedIn,
      username: this.state.username,
    };
    localStorage.setItem("instacloneLogin", JSON.stringify(userInfoVal));
    this.props.login();
  }

  render() {
    return (
      <form className="login" onSubmit={this.login}>
        <img src={instagramWordmark} className="wordmark" alt="Instagram Wordmark" />
        <input className={`${this.state.errorUser ? 'error' : ''}`} value={this.state.username} onChange={this.fieldInputHandler} type="text" minLength="2" name="username" id="username" placeholder="username" />
        <input className={`${this.state.errorPass ? 'error' : ''}`} value={this.state.password} onChange={this.fieldInputHandler} type="password" minLength="8" name="password" id="password" placeholder="password" />
        <button type="submit" name="submit">Login</button>
      </form>
    )
  }
}

export default Login;