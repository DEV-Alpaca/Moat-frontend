import React from 'react';
import Nav from '../components/common/Nav';
import AuthForm from '../components/auth/AuthForm';

const AuthPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <AuthForm />
    </>
  );
};

export default AuthPage;
