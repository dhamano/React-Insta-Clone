import React from 'react';
import Fuse from "fuse.js";
import './App.scss';

import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

import dummyData from './dummy-data';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: [],
      filteredData:[],
      isFiltered: false
    }
  }

  componentDidMount() {
    this.setState({ taskData: dummyData })
    this.getValuesFromLocalStorage();
  }

  addComment = (event, comment) => {
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
    }, () => this.addToLocalStorage())
  }

  addLike = (event) => {
    console.log('event ',event);
    let index = event.target.dataset.index;
    let newLikes = [...this.state.taskData]
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
    console.log("event ",event," pindex ",pindex," index ",index);
    let deletedCommentArr = [...this.state.taskData];
    deletedCommentArr[pindex].comments.splice(index,1);
    this.setState({
      taskData: deletedCommentArr
    }, () => this.addToLocalStorage())
  }

  filterOnChange = (event, filterQuery) => {
    /*
    (filterQuery !== "") ? this.setState({ isFiltered: true }) : this.setState({ isFiltered: false });
    let filteredData = this.state.taskData.filter( item => {
      let username = item.username.toLowerCase();
      return username.indexOf( filterQuery.toLowerCase() ) !== -1;
    });
    this.setState({ filteredData: filteredData });
    //*/
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
    let fuse = new Fuse(this.state.taskData, options); // "list" is the item array
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
    let listToUse = []
    if(this.state.isFiltered){
      listToUse = this.state.filteredData;
    } else {
      listToUse = this.state.taskData;
    }
    return (
      <div className="App">
        <SearchBar filterOnChange={this.filterOnChange} />
        <PostContainer data={listToUse} commentSubmit={this.addComment} addLike={this.addLike} removeComment={this.removeComment} />
      </div>
    );
  }
}

export default App;
