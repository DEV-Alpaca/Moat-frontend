import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterForm from '../../components/auth/RegisterForm';
import { changeField, initializeForm } from '../../modules/register';

const RegisterFormContainerBlock = styled.div``;

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { password, passwordConfirm } = useSelector(({ register }) => ({
    password: register.password,
    passwordConfirm: register.passwordConfirm,
  }));

  const [errorMessage, setErrorMessage] = useState({
    password: '비밀번호를 올바른 양식으로 입력해주세요.',
    passwordConfirm: '비밀번호를 다시 확인해주세요.',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('RegisterFormContainer/onSubmit');
  };

  return (
    <RegisterFormContainerBlock>
      <RegisterForm
        onChange={onChange}
        onSubmit={onSubmit}
        password={password}
        passwordConfirm={passwordConfirm}
        errorMessage={errorMessage}
        error={false}
      />
    </RegisterFormContainerBlock>
  );
};

export default RegisterFormContainer;
