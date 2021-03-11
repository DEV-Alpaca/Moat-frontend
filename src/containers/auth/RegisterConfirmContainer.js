import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterConfirmForm from '../../components/auth/RegisterConfirmForm';
import { changeField, initializeForm } from '../../modules/register';

const RegisterConfirmContainerBlock = styled.div``;

const RegisterConfirmContainer = () => {
  const dispatch = useDispatch();
  const { birthday } = useSelector(({ register }) => ({
    birthday: register.birthday,
  }));

  const [errorMessage, setErrorMessage] = useState(
    '생년월일을 올바르게 입력해주세요.',
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('RegisterConfirmContainer/onSubmit');
  };

  return (
    <RegisterConfirmContainerBlock>
      <RegisterConfirmForm
        onChange={onChange}
        onSubmit={onSubmit}
        birthday={birthday}
        errorMessage={errorMessage}
        error={false}
      />
    </RegisterConfirmContainerBlock>
  );
};

export default RegisterConfirmContainer;
