import React from 'react';

import { Card, CardImg } from 'reactstrap';

import PostHeader from './PostHeader';
import PostInteraction from './PostInteraction';
import CommentSection from '../CommentSection/CommentSection';

import './postcontainer.scss';

const PostContainer = props => {
  return (
    props.cardData.map( (item,i) => {
      return (
        <Card key={i}>
          <PostHeader username={item.username} thumbnail={item.thumbnailUrl} />
          <CardImg top width="100%" src={item.imageUrl} />
          <PostInteraction likes={item.likes} />
          <CommentSection index={i} comments={item.comments} timestamp={item.timestamp} commentSubmit={props.commentSubmit} />
        </Card>
      )
    })
  );
}

export default PostContainer;