import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterForm from '../../components/auth/RegisterForm';
import { changeField, initializeForm } from '../../modules/register';

const RegisterFormContainerBlock = styled.div``;

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { mobile, mobileConfirm, password, passwordConfirm } = useSelector(
    ({ register }) => ({
      mobile: register.mobile,
      mobileConfirm: register.mobileConfirm,
      password: register.password,
      passwordConfirm: register.passwordConfirm,
    }),
  );

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
      />
    </RegisterFormContainerBlock>
  );
};

export default RegisterFormContainer;
