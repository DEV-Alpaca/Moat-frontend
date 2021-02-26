import React from 'react';
import styled from 'styled-components';
import PostForm from './PostForm';

const PostViewerBlock = styled.div``;

const PostViewerImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 270px;
  margin: 0;
`;

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostViewerImage
        src="http://placehold.it/320x100?text=sample"
        alt="postViewerImage"
      />
    </PostViewerBlock>
  );
};

export default PostViewer;
