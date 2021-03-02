import React from 'react';
import Nav from '../components/common/Nav';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
