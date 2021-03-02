import React from 'react';
import Nav from '../components/common/Nav';
import RegisterFormContainer from '../containers/auth/RegisterFormContainer';

const RegisterPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <RegisterFormContainer />
    </>
  );
};

export default RegisterPage;
