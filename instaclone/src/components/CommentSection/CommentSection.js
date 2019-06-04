import React from 'react';

import moment from 'moment';

import './comments.scss';

class CommentSection extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: ''
    };
  }

  handleInput = event => {
    this.setState({
      comment: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.commentSubmit(event, this.state.comment);
    this.setState({
      comment: ''
    })
  }

  deleteClickHandler = (event) => {
    this.props.removeComment(event, event.target.dataset.pindex, event.target.dataset.index);
  }

  render() {
    return (
      <div className="comment-section">
        {this.props.comments.map( (item, i) => {
          return(
            <div className="comment" key={i}>
              <strong>{item.username}</strong> {item.text} <span className="delete" onClick={this.deleteClickHandler} data-pindex={this.props.index} data-index={i}>delete</span>
            </div>
          )
        })}
        <p className="timestamp">{moment(this.props.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
        <form onSubmit={this.onSubmit} data-index={this.props.index} data-username={this.props.username} >
          <div className="overflow-menu">&hellip;</div>
          <input placeholder="Add a comment&hellip;" onChange={this.handleInput} value={this.state.comment} />
        </form>
      </div>
    )
  }
}

export default CommentSection;