import React from 'react';
import { statement } from '@babel/template';

const withAuthenticate = Prop01 => Prop02 =>
  class extends React.Component {
    state = {
      loggedIn: localStorage.getItem("instacloneLogin")
    }

    login = () => {
      this.setState({
        loggedIn: localStorage.getItem("instacloneLogin")
      })
    }

    render() {
      if(this.state.loggedIn) {
        return <Prop02 />
      } else {
        return <Prop01 loggedIn={this.login} />
      }
    }
  };

export default withAuthenticate;