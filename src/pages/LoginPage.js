import React from 'react';
import Nav from '../components/common/Nav';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Nav close />
      <LoginForm />
    </>
  );
};

export default LoginPage;
