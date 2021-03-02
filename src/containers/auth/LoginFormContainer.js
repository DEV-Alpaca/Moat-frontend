import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginForm from '../../components/auth/LoginForm';
import { changeField, initializeForm } from '../../modules/login';

const LoginFormContainerBlock = styled.div``;

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { mobile, password } = useSelector(({ login }) => ({
    mobile: login.mobile,
    password: login.password,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('LoginFormContainer/onSubmit');
  };

  useEffect(() => {
    return () => dispatch(initializeForm());
  }, [dispatch]);

  return (
    <LoginFormContainerBlock>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        mobile={mobile}
        password={password}
      />
    </LoginFormContainerBlock>
  );
};

export default LoginFormContainer;
