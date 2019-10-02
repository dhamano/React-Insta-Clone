import React from 'react';
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.taskData} />
      </div>
    );
  }
}

export default App;
