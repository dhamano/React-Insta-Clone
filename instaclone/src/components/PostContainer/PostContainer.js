import React from 'react';

import PostCard from './PostCard';

import './postcontainer.scss';

const PostContainer = props => {
  return (
    <div>
      <PostCard cardData={props.data} commentSubmit={props.commentSubmit} />
    </div>
  );
}

export default PostContainer;