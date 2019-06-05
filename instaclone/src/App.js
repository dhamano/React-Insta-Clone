import React from 'react';

import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

class App extends React.Component {
  render() {
    return (
      <ComponentFromWithAuthenticate />
    )
  }
}

export default App;
