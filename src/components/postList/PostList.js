import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import PostForm from './PostForm';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import Text from '../common/Text';
import r from '../../lib/styles/Rem';

const PostListBlock = styled.div``;

const StyledButton = styled(Button)`
  position: fixed;
  top: 31.17rem;
  right: ${r[16]}rem;

  width: ${r[160]}rem;
`;

const Padding = styled.div`
  margin: 0;
  padding: 0;
  width: ${r[3]}rem;
`;

const PostList = () => {
  return (
    <PostListBlock>
      <StyledButton>
        <Plus style={{ marginTop: '2px' }} /> <Padding />
        모임 만들기
      </StyledButton>
      <PostForm />
      <PostForm />
      <PostForm />
    </PostListBlock>
  );
};

export default PostList;
