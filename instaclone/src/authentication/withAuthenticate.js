import React from 'react';

const withAuthenticate = Prop01 => Prop02 =>
  class extends React.Component {
    state = {
      userInfo: {
        loggedIn: false,
        username: 'anonymous'
      }
    }

    componentDidMount() {
      this.login();
    }

    login = () => {
      if (localStorage.hasOwnProperty("instacloneLogin")) {
        let value = localStorage.getItem("instacloneLogin");
        try {
          value = JSON.parse(value);
          this.setState({ userInfo: value });
        } catch (error) {
          this.setState({ userInfo: value });
        }
      }
    }

    render() {
      if(this.state.userInfo.loggedIn) {
        return <Prop02 username={this.state.userInfo.username} />
      } else {
        return <Prop01 login={this.login} />
      }
    }
  };

export default withAuthenticate;