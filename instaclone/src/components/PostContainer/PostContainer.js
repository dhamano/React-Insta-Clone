import React from 'react';

import PostCard from './PostCard';

import './postcontainer.scss';

const PostContainer = props => {
  return (
    <div>
      <PostCard cardData={props.data} />
    </div>
  );
}

export default PostContainer;