import React from 'react';

const PostHeader = props => {
  return(
    <header className="post-header">
      <img src={props.thumbnail} alt={props.username} />
      <h3>{props.username}</h3>
    </header>
  )
}

export default PostHeader;