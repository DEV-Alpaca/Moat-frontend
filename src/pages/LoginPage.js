import React from 'react';
import Nav from '../components/common/Nav';
import LoginFormContainer from '../containers/auth/LoginFormContainer';

const LoginPage = () => {
  return (
    <>
      <Nav close />
      <LoginFormContainer />
    </>
  );
};

export default LoginPage;
