import React from 'react';
import Nav from '../components/common/Nav';
import AuthFormContainer from '../containers/auth/AuthFormContainer';

const AuthPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <AuthFormContainer />
    </>
  );
};

export default AuthPage;
