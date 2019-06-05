import React from 'react';
import Fuse from 'fuse.js';

import SearchBar from '../SearchBar/SearchBar';
import PostContainer from './PostContainer';

import dummyData from '../../dummy-data';

class PostsPage extends React.Component {
  state = {
    taskData: [],
    filteredData:[],
    isFiltered: false,
    username: this.props.username
  }

  componentDidMount() {
    this.setState({ taskData: dummyData })
    this.getValuesFromLocalStorage();
  }

  addComment = (event, comment) => {
    let index = event.target.dataset.index;
    let newComments = [...this.state.taskData]
    newComments[index].comments.push({
      username: this.state.username,
      text: comment
    });
    this.setState({
      taskData: newComments
    }, () => this.addToLocalStorage())
  }

  addLike = (event) => {
    let index = event.target.dataset.index;
    let newLikes = [...this.state.taskData];
    if(newLikes[index].likedThis !== true) {
      newLikes[index].likedThis = true;
      newLikes[index].likes = newLikes[index].likes + 1;
      this.setState({
        taskData: newLikes
      }, () => this.addToLocalStorage())
    } else {
      newLikes[index].likedThis = false;
      newLikes[index].likes = newLikes[index].likes - 1;
      this.setState({
        taskData: newLikes
      }, () => this.addToLocalStorage())
    }
  }

  removeComment = (event, pindex, index) => {
    let deletedCommentArr = [...this.state.taskData];
    deletedCommentArr[pindex].comments.splice(index,1);
    this.setState({
      taskData: deletedCommentArr
    }, () => this.addToLocalStorage())
  }

  filterOnChange = (event, filterQuery) => {
    (filterQuery !== "") ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false });
    var options = {
      shouldSort: true,
      tokenize: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "username",
        "comments.username"
      ]
    };
    let fuse = new Fuse(this.state.taskData, options);
    let filteredData = fuse.search(filterQuery);
    this.setState({ filteredData: filteredData });
  }

  addToLocalStorage() {
    localStorage.setItem("instaCloneData", JSON.stringify(this.state.taskData));
  }

  getValuesFromLocalStorage() {
    if (localStorage.hasOwnProperty("instaCloneData")) {
      let value = localStorage.getItem("instaCloneData");
      try {
        value = JSON.parse(value);
        this.setState({ taskData: value });
      } catch (error) {
        this.setState({ taskData: value });
      }
    }
  }

  render() {
    let listToUse = (this.state.isFiltered) ?  this.state.filteredData : this.state.taskData;
    return (
      <div className="App">
        <SearchBar filterOnChange={this.filterOnChange} />
        <PostContainer data={listToUse} commentSubmit={this.addComment} addLike={this.addLike} removeComment={this.removeComment} />
      </div>
    );
  }
    
}

export default PostsPage;