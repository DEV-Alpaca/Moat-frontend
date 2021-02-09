import React from 'react';
import Button from '../components/common/Button';
import Form from '../lib/styles/Form';

const LoginPage = () => {
  return (
    <>
      <Form>
        로그인 페이지
        <Button>로그인</Button>
        <Button white>로그인</Button>
        <Button closed>로그인</Button>
        <Button full>로그인</Button>
      </Form>
      <Form background={true}>aa</Form>
    </>
  );
};

export default LoginPage;
