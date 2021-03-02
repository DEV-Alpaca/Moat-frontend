import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import Text from '../common/Text';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Padding from '../common/Padding';
import r from '../../lib/styles/Rem';

const StyledDiv = styled(Form)`
  box-sizing: border-box;

  width: 100%;
  padding-top: ${r[26]}rem;
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

      <StyledDiv background={`${palette.orange5}`}>
        <Text fontWeight={800}> 아직 가입 전이신가요?</Text>
        <Text gray fontSize={16}>
          모앗에서 가입하고 동네에서 경험을 나눠보세요.
        </Text>
        <Padding />

        <Button
          white
          style={{ border: `1px solid ${palette.orange}`, fontWeight: '800' }}
        >
          회원가입{' '}
        </Button>
        <Padding />
        <Text
          gray
          style={{
            cursor: 'pointer',
            textAlign: 'center',
            marginBottom: `${r[28]}rem`,
          }}
          fontSize={18}
        >
          비밀번호를 잊어버렸어요
        </Text>
      </StyledDiv>
    </>
  );
};

export default LoginForm;
