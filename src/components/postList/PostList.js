import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import PostForm from './PostForm';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Call } from '../../assets/call.svg';
import { ReactComponent as Location } from '../../assets/location.svg';

import Text from '../common/Text';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Title from '../common/Title';
import CarouselSlider from './mainboard/CarouselSlider';
import Sample from './mainboard/Sample';

const Mainboard = styled(Form)`
  display: flex;
  /* height: ${r[214]}rem;

  background-color: ${palette.orange5}; */
`;

const TitleContainer = styled(Form)`
  height: ${r[84]}rem;

  padding: ${r[10]}rem;
  .titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLocationButton = styled(Button)`
  width: ${r[160]}rem;
  height: ${r[40]}rem;
  padding: ${r[5]}rem ${r[5]}rem;
  align-items: center;
  font-size: 1rem;
  letter-spacing: -0.4px;

  border-radius: 8px;
  border: solid 1px ${palette.orange};
  background-color: ${palette.white};
`;

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
  width: ${r[114]}rem;
  padding: 0;
  align-items: center;
  margin-top: ${r[8]}rem;
`;

const PostList = () => {
  return (
    <>
      <Sample />
      {/* <Mainboard>우리마을</Mainboard> */}
      <TitleContainer>
        <Title>서울특별시</Title>
        <div className="titleBox">
          <Title>서대문&마포구</Title>
          <StyledLocationButton white>
            <Location style={{ marginTop: '4px' }} /> <Padding />
            지역 변경
          </StyledLocationButton>
        </div>
      </TitleContainer>
      <StyledButton>
        <Plus style={{ marginTop: '2px' }} /> <Padding />
        모임 만들기
      </StyledButton>
      <PostForm />
      <PostForm />
      <PostForm />
      <QuestionBlock>
        <Form background={`${palette.gray[50]}`}>
          <QuestionContainer>
            <Text
              style={{ textAlign: 'left', marginRight: 'auto' }}
              fontSize={23}
              fontWeight={800}
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
