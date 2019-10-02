import React from 'react';

const PostInteraction = props => {
  return( 
    <div className="interactive">
      <i className={`far fa-heart ${props.likedThis ? 'liked' : ''} `} data-index={props.index} onClick={props.addLike} ></i><i className="far fa-comment"></i>
      <p>{props.likes} likes</p>
    </div>
  )
}

export default PostInteraction;