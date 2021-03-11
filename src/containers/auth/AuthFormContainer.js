import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import AuthForm from '../../components/auth/AuthForm';
import { changeField } from '../../modules/register';

const AuthFormContainerBlock = styled.div``;

const AuthFormContainer = () => {
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
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('AuthFormContainer/onSubmit');
  };

  return (
    <AuthFormContainerBlock>
      <AuthForm
        onChange={onChange}
        onSubmit={onSubmit}
        phone_number={phone_number}
        phone_numberConfirm={phone_numberConfirm}
        errorMessage={errorMessage}
        error={false}
      />
    </AuthFormContainerBlock>
  );
};

export default AuthFormContainer;
