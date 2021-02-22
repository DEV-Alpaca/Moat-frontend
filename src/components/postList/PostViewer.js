import React from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';

const PostViewerBlock = styled.div``;

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostForm postViewer />
    </PostViewerBlock>
  );
};

export default PostViewer;
