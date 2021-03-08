import React from 'react';
import styled from 'styled-components';
import BoldLine from '../common/BoldLine';
import Button from '../common/Button';
import Line from '../common/Line';
import PostViewerForm from './PostViewerForm';
import PostViewerInfo from './PostViewerInfo';
import PostViewerIntroduce from './PostViewerIntroduce';

const PostViewerBlock = styled.div``;

const PostViewer = ({ closed = false }) => {
  return (
    <PostViewerBlock>
      <PostViewerForm {...{ closed }} />
      <BoldLine />
      <PostViewerIntroduce {...{ closed }} />
      <Line />
      <PostViewerInfo />
      {!closed && <Button full>신청하기</Button>}
      {closed && (
        <Button full closed>
          신청하기
        </Button>
      )}
    </PostViewerBlock>
  );
};

export default PostViewer;
