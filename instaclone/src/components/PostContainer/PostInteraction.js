import React from 'react';

const PostInteraction = props => {
  return( 
    <div className="interactive">
      <i className="far fa-heart"></i><i className="far fa-comment"></i>
      <p>{props.likes} likes</p>
    </div>
  )
}

export default PostInteraction;