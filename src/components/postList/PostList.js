import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import PostForm from './PostForm';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Call } from '../../assets/call.svg';

import Text from '../common/Text';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';

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

const QuestionBlock = styled.div`
  width: 100%;
  height: ${r[196]}rem;
  padding-top: ${r[16]}rem;
  background-color: ${palette.gray[50]};
  text-align: left;
`;

const QuestionContainer = styled.div`
  display: flex;
`;

const StyledCallButton = styled(Button)`
  width: 8rem;
  margin-top: ${r[8]}rem;
`;

const PostList = () => {
  return (
    <>
      <PostListBlock>
        {/* <StyledButton>
          <Plus style={{ marginTop: '2px' }} /> <Padding />
          모임 만들기
        </StyledButton> */}
        <PostForm />
        <PostForm />
        <PostForm />
      </PostListBlock>
      <QuestionBlock>
        <Form background={`${palette.gray[50]}`}>
          <QuestionContainer>
            <Text
              style={{ textAlign: 'left', marginRight: 'auto' }}
              fontSize={23}
              fontWeght={800}
            >
              모앗에게 궁금한 점이 <br />
              있으신가요?
            </Text>
            <StyledCallButton white>
              <Call style={{ marginTop: '4px' }} />
              문의하기
            </StyledCallButton>
          </QuestionContainer>
        </Form>
      </QuestionBlock>
    </>
  );
};

export default PostList;
