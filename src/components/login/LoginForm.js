import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Title from '../../components/common/Title';
import Text from '../../components/common/Text';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Padding from '../common/Padding';
import r from '../../lib/styles/Rem';

const StyledDiv = styled.div`
  box-sizing: border-box;

  position: fixed;
  width: 100%;
  max-width: 36rem;
  bottom: 0;
`;

const LoginForm = () => {
  return (
    <>
      <Form>
        <Title>로그인</Title>
        <Padding />
        <Padding />
        <Text orange fontSize={16} textAlign={'left'} marginLeft={`${r[8]}`}>
          전화번호
        </Text>
        <Input placeholder=" 전화번호를 입력하세요."></Input>
        <Text
          red
          fontSize={18}
          textAlign={'left'}
          marginLeft={`${r[12]}`}
          marginTop={`${r[3]}`}
          fontWeight={700}
        >
          전화번호를 다시 확인해주세요.
        </Text>
        <Padding />
        <Input type="password" placeholder=" 비밀번호를 입력하세요."></Input>
        <Text
          red
          fontSize={18}
          textAlign={'left'}
          marginLeft={`${r[12]}`}
          marginTop={`${r[3]}`}
          fontWeight={700}
        >
          비밀번호를 다시 확인해주세요.
        </Text>
        <Padding />
        <Button>로그인</Button>
      </Form>
      <StyledDiv>
        <Form background={`${palette.orange5}`}>
          <Text gray> 지금 바로 우리 동네에 있는</Text>
          <Text gray> 나만을 위한 취미수업과 모임을 찾아보세요.</Text>
          <Padding />

          <Button white>회원가입 </Button>
          <Padding />
          <Text orange style={{ cursor: 'pointer' }}>
            비밀번호를 잊어버렸어요.
          </Text>
        </Form>
      </StyledDiv>
    </>
  );
};

export default LoginForm;
