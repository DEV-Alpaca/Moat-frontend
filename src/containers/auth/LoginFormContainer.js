import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/auth/LoginForm';

const LoginFormContainerBlock = styled.div``;

const LoginFormContainer = () => {
  return (
    <LoginFormContainerBlock>
      <LoginForm />
    </LoginFormContainerBlock>
  );
};

export default LoginFormContainer;
