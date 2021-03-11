import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';
import { changeField } from '../../modules/register';

const AuthFormContainerBlock = styled.div``;

const AuthFormContainer = ({ isPasswordChange }) => {
  const dispatch = useDispatch();
  const { phone_number, phone_numberConfirm } = useSelector(({ register }) => ({
    phone_number: register.phone_number,
    phone_numberConfirm: register.phone_numberConfirm,
  }));

  const [errorMessage, setErrorMessage] = useState(
    '인증번호를 다시 확인해주세요.',
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    const curValue = value;
    const newValue = curValue.replace(/[^0-9]/g, '');
    dispatch(changeField({ key: name, value: newValue }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('AuthFormContainer/onSubmit');
  };

  useEffect(() => {
    return () => {
      dispatch(changeField({ key: 'phone_number', value: '' }));
      dispatch(changeField({ key: 'phone_numberConfirm', value: '' }));
    };
  }, [dispatch]);

  return (
    <AuthFormContainerBlock>
      <AuthForm
        onChange={onChange}
        onSubmit={onSubmit}
        phone_number={phone_number}
        phone_numberConfirm={phone_numberConfirm}
        errorMessage={errorMessage}
        error={false}
        isPasswordChange={isPasswordChange}
      />
    </AuthFormContainerBlock>
  );
};

export default AuthFormContainer;
