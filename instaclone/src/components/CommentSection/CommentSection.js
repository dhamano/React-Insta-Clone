import React from 'react';

import moment from 'moment';

import './comments.scss';

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map( (item, i) => {
        return(
          <div className="comment" key={i}>
            <strong>{item.username}</strong> {item.text}
          </div>
        )
      })}
      <p className="timestamp">{moment(props.timestamp,'MMMM Do YYYY, h:mm:ss a').fromNow()}</p>
      <form>
        <div className="overflow-menu">&hellip;</div>
        <input placeholder="Add a comment&hellip;" />
      </form>
    </div>
  )
}

export default CommentSection;