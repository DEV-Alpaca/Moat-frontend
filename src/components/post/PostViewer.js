import React from 'react';
import styled from 'styled-components';
import BoldLine from '../common/BoldLine';
import Button from '../common/Button';
import Line from '../common/Line';
import PostViewerForm from './PostViewerForm';
import PostViewerInfo from './PostViewerInfo';
import PostViewerIntroduce from './PostViewerIntroduce';

const PostViewerBlock = styled.div``;

const PostViewer = () => {
  return (
    <PostViewerBlock>
      <PostViewerForm />
      <BoldLine />
      <PostViewerIntroduce />
      <Line />
      <PostViewerInfo />
      <Button full>신청하기</Button>
    </PostViewerBlock>
  );
};

export default PostViewer;
