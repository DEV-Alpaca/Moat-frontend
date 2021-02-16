import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';

import { ReactComponent as Camera } from '../../assets/camera.svg';

import Text from '../common/Text';
import Button from '../common/Button';
import palette from '../../lib/styles/paletts';
import Input from '../common/Input';

const ButtonBlock = styled.div`
  display: flex;
`;

const buttonStyle = css`
  background: ${palette.white};
  color: ${palette.gray[300]};
  border-radius: 8px 8px 0 0;
  height: ${r[52]}rem;
`;

const StyledOrangeButton = styled(Button)`
  ${buttonStyle}
  /* &:hover {
    color: ${palette.orange};
    background: ${palette.orange5};
    border-bottom: 2px solid ${palette.orange};
  } */

  ${(props) =>
    props.active &&
    css`
      color: ${palette.orange};
      background: ${palette.orange5};
      border-bottom: 2px solid ${palette.orange};
    `}
`;

const StyledGreenButton = styled(Button)`
  ${buttonStyle}
  :hover,:active {
    color: ${palette.green};
    background: ${palette.green5};
    border-bottom: ${palette.green};
    border-bottom: 2px solid ${palette.green};
  }
`;

const StyledInput = styled(Input)`
  width: 98%;

  padding-left: ${r[10]}rem;
  height: ${r[52]}rem;
`;

const CameraBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${r[70]}rem;
  height: ${r[70]}rem;
  margin-top: 1rem;
  padding: 15px 11px 7px 12px;
  border-radius: 8px;
  border: solid 1px ${palette.gray[100]};
  background-color: ${palette.gray[50]};
  letter-spacing: -0.7px;
  color: #808080;
`;

const StyledForm = styled(Form)`
  margin-top: ${r[16]}rem;
  border-radius: 8px;
  border: 1px solid ${palette.gray[200]};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  overflow: visible;
  font-size: ${r[20]}rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.7px;
  color: ${palette.black};
  resize: none;

  &:focus {
    color: black;
  }
`;

const WriteForm = () => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(''); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [currentValue]);

  return (
    <Form>
      <form>
        <ButtonBlock>
          <StyledOrangeButton active>소모임</StyledOrangeButton>
          <StyledGreenButton>재능공유</StyledGreenButton>
        </ButtonBlock>
        <StyledInput placeholder="모임의 제목을 한줄로 적어주세요" />
        <Text
          textAlign={'left'}
          fontWeight={'400'}
          style={{
            marginTop: `${r[24]}rem`,
            color: `${palette.gray[300]}`,
          }}
        >
          소개이미지를 1장 이상 추가해주세요.
        </Text>
        <CameraBlock>
          <Camera />
          <Text fontWeight={400}>사진추가</Text>
        </CameraBlock>
        <StyledForm style={{ padding: `${r[12]}rem ${r[12]}rem` }}>
          <StyledTextarea
            // ref={textareaRef}
            // value={currentValue}
            // onChange={(e) => {
            //   setCurrentValue(e.target.value);
            // }}
            placeholder="동/읍/면"
            rows="1"
          />
          <StyledTextarea
            // ref={textareaRef}
            // value={currentValue}
            // onChange={(e) => {
            //   setCurrentValue(e.target.value);
            // }}
            placeholder="장소(ex. 체육관)"
            rows="1"
          />
          <StyledTextarea
            // ref={textareaRef}
            // value={currentValue}
            // onChange={(e) => {
            //   setCurrentValue(e.target.value);
            // }}
            placeholder="날짜(ex. 매주 화/수,금/협의/미정)"
            rows="1"
          />
          <StyledTextarea
            ref={textareaRef}
            value={currentValue}
            onChange={(e) => {
              setCurrentValue(e.target.value);
            }}
            placeholder="어떤 모임인지 이웃들이 알기 쉽게 적어주세요!"
            rows="6"
          />
        </StyledForm>
        <Button
          closed
          style={{
            marginTop: `${r[24]}rem`,
          }}
        >
          작성완료
        </Button>
      </form>
    </Form>
  );
};

export default WriteForm;
