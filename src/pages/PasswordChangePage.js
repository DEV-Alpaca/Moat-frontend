import React from 'react';
import Nav from '../components/common/Nav';
import PasswordChangeForm from '../components/auth/PasswordChangeForm';

const PasswordChangePage = () => {
  return (
    <>
      <Nav goback text={'비밀번호 재설정하기'} />
      <PasswordChangeForm />
    </>
  );
};

export default PasswordChangePage;
