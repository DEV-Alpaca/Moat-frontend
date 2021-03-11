import React from 'react';
import Nav from '../components/common/Nav';
import AuthFormContainer from '../containers/auth/AuthFormContainer';
import qs from 'qs';

const AuthPage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const isPasswordChange = query.passwordChange === 'true';

  return (
    <>
      {console.log(isPasswordChange)}
      <Nav
        goback
        text={isPasswordChange ? '비밀번호 재설정하기' : '회원가입'}
      />
      <AuthFormContainer isPasswordChange={isPasswordChange} />
    </>
  );
};

export default AuthPage;
