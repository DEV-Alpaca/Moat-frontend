import React from 'react';
import Nav from '../components/common/Nav';
import RegisterConfirmContainer from '../containers/auth/RegisterConfirmContainer';

const RegisterConfirmPage = () => {
  return (
    <>
      <Nav goback text={'회원가입'} />
      <RegisterConfirmContainer />
    </>
  );
};

export default RegisterConfirmPage;
