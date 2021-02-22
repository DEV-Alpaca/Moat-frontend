import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Padding from '../common/Padding';

import { ReactComponent as Check } from '../../assets/greencheck.svg';
import Text from '../common/Text';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  max-width: 36rem;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  padding: 0 ${r[6]}rem;

  border: solid 1px ${palette.gray[200]};
  outline: none;
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  height: ${r[52]}rem;

  margin: 0;
  padding: 0;
  font-size: ${r[20]}rem;
  color: ${palette.black};
  font-weight: normal;
  border: none;
  outline: none;
`;

const StyledAuthButton = styled(Button)`
  display: flex;
  align-items: center;
  height: ${r[40]}rem;

  padding: 0 ${r[5]}rem;
  width: 89px;
  height: ${r[40]}rem;
  font-size: ${r[16]}rem;
`;

const AuthForm = () => {
  return (
    <>
      <Form>
        <Padding />
        <Title>
          휴대전화번호를
          <br />
          인증해주세요.
        </Title>
        <Padding height={`${r[60]}`} />
        <Text orange fontSize={16} textAlign={'left'} marginLeft={`${r[8]}`}>
          전화번호 입력
        </Text>
        <StyledDiv>
          <StyledInput placeholder="전화번호를 입력해주세요."></StyledInput>
          <StyledAuthButton>인증하기</StyledAuthButton>
        </StyledDiv>
        <Padding />
        <StyledDiv>
          <StyledInput placeholder="인증번호를 입력해주세요."></StyledInput>
          <Check />
        </StyledDiv>
      </Form>
      <StyledButton closed full fontSize={23} fontWeight={500}>
        다음으로
      </StyledButton>
    </>
  );
};

export default AuthForm;
