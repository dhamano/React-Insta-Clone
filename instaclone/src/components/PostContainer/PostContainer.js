import React from 'react';

import PostCard from './PostCard';
import PropTypes from 'prop-types';

import './postcontainer.scss';

const PostContainer = props => {
  return (
    <div>
      <PostCard cardData={props.data} commentSubmit={props.commentSubmit} addLike={props.addLike} removeComment={props.removeComment} />
    </div>
  );
}

PostContainer.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          username: PropTypes.string,
          text: PropTypes.string
        })
      )
    })
  ),
  commentSubmit: PropTypes.func,
  addLike: PropTypes.func,
  removeComment: PropTypes.func
};

export default PostContainer;