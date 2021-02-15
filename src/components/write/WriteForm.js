import React from 'react';
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

const WriteForm = () => {
  return (
    <Form>
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
    </Form>
  );
};

export default WriteForm;
