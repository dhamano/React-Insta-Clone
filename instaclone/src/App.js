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

  addComment(event, comment) {
    console.log('event ',event,' comment ',comment);
    let username ='';
    console.log('text ',event.target.get);
    if(event.target.dataset.username === '' || event.target.dataset.username === undefined) {
      username = 'anonymous';
    } else {
      username = event.target.dataset.username;
    }
    let index = event.target.dataset.index;
    let newComments = [...this.state.taskData]
    newComments[index].comments.push({
      username: username,
      text: comment
    });
    this.setState({
      taskData: newComments
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer data={this.state.taskData} commentSubmit={this.addComment.bind(this)} />
      </div>
    );
  }
}

export default App;
