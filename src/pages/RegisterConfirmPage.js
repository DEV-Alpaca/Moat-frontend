import React from 'react';
import Nav from '../components/common/Nav';
import RegisterConfirmForm from '../components/register/RegisterConfirmForm';

const RegisterConfirmPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <RegisterConfirmForm />
    </>
  );
};

export default RegisterConfirmPage;
