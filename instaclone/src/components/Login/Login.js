import React from 'react';
import styled from 'styled-components';

import instagramWordmark from '../../img/instagram-wordmark.png';

import './login.scss';

const InstructionDiv = styled.div`
  max-width: 300px;
  width: 100%;
  color: #c77;
  font-style: italic;
  font-size: 0.75rem;
  line-height: 1.5em;
  position: absolute;
  top: 45px;
  right: -104%;

   ul{
    margin: 0;
    padding: 0;
  }
  

  ul ul {
    margin-left: 20px;

    li{
      width: 40%;
      list-style-type: square;
      display: inline-block;

      &:nth-child(1) {
        width: 100%;
      }
    }
  }
`;

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
    this.setState({ [event.target.name]: event.target.value })
  }
  
  login = event => {
    event.preventDefault();
    if(this.state.username.length < 2) {
      this.setState({ errorUser: true });
      return false;
    } else {
      this.setState({ errorUser: false });
    }
    event.preventDefault();
    if(this.state.password.length < 8) {
      this.setState({  errorPass: true });
      return false;
    } else {
      this.setState({ errorPass: false });
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
        <div>
          <InstructionDiv>
            <ul>
              <li>Username must be longer than 2 characters.</li>
              <li>Password must be longer than 8 characters.</li>
              <li>Working items:
                <ul>
                  <li>Local Storage to Save Current State</li>
                  <li>Login / Logout</li>
                  <li>Filter</li>
                  <li>Likes</li>
                  <li>Add Comments</li>
                  <li>Delete Comments</li>
                </ul>
              </li>
              <li>Password must be longer than 8 characters.</li>
            </ul>
          </InstructionDiv>
          <img src={instagramWordmark} className="wordmark" alt="Instagram Wordmark" />
          <input className={`${this.state.errorUser ? 'error' : ''}`} value={this.state.username} onChange={this.fieldInputHandler} type="text" minLength="2" name="username" id="username" placeholder="username" />
          <input className={`${this.state.errorPass ? 'error' : ''}`} value={this.state.password} onChange={this.fieldInputHandler} type="password" minLength="8" name="password" id="password" placeholder="password" />
          <button type="submit" name="submit">Login</button>
        </div>
      </form>
    )
  }
}

export default Login;