import React from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Title from '../components/common/Title';
import Text from '../components/common/Text';
import Form from '../lib/styles/Form';
import Nav from '../components/common/Nav';
import Header from '../components/common/Header';

const LoginPage = () => {
  return (
    <>
      <Header />
      {/* <Nav goback text="회원가입" /> */}
      <Form>
        <Title>로그인</Title>
        <Button>로그인</Button>
        <Input placeholder=" 전화번호를 입력하세요."></Input>
        <Input type="password" placeholder=" 비밀번호를 입력하세요."></Input>
      </Form>

      <Form background={true}>
        <Text gray> 지금 바로 우리 동네에 있는</Text>
        <Text gray> 나만을 위한 취미수업과 모임을 찾아보세요.</Text>
        <Button white>회원가입 </Button>

        <Text orange>비밀번호를 잊어버렸어요.</Text>
      </Form>
    </>
  );
};

export default LoginPage;
