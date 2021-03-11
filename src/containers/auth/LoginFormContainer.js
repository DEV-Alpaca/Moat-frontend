import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginForm from '../../components/auth/LoginForm';
import { changeField, initializeForm } from '../../modules/login';

const LoginFormContainerBlock = styled.div``;

const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const { phone_number, password } = useSelector(({ login }) => ({
    phone_number: login.phone_number,
    password: login.password,
  }));

  const [focus, setFocus] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    login: '전화번호를 다시 확인해주세요.',
    password: '비밀번호를 다시 확인해주세요.',
  });

  const onFocus = () => {
    setFocus(!focus);
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('로그인');
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
        onFocus={onFocus}
        phone_number={phone_number}
        password={password}
        focus={focus}
        errorMessage={errorMessage}
        error={false}
      />
    </LoginFormContainerBlock>
  );
};

export default LoginFormContainer;
