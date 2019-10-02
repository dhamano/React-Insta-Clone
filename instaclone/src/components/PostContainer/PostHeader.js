import React from 'react';

const PostHeader = props => {
  return(
    <div className="post-header">
      <img src={props.thumbnail} alt={props.username} />
      <h3>{props.username}</h3>
    </div>
  )
}

export default PostHeader;