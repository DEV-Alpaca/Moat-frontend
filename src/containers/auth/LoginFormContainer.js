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

  const [errorMessage, setErrorMessage] = useState({
    login: '전화번호를 다시 확인해주세요.',
    password: '비밀번호를 다시 확인해주세요.',
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);

    if (name === 'phone_number') {
      const curValue = value;
      const newValue = curValue.replace(/[^0-9]/g, '');
      dispatch(changeField({ key: name, value: newValue }));
      return;
    }
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if ([phone_number, password].includes('')) {
      alert('빈 칸을 모두 입력하세요.');
      return;
    }
    var regExpPw = /(?=.*\d{1,50})(?=.*[a-zA-Z]{1,50}).{6,50}$/;
    if (!regExpPw.test(password)) {
      alert('비밀번호는 최소 영어랑, 숫자 1개이상 포함');
      return;
    }

    alert(`로그인 전화번호 : ${phone_number}, 비밀번호 : ${password}`);
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
        phone_number={phone_number}
        password={password}
        errorMessage={errorMessage}
        error={false}
      />
    </LoginFormContainerBlock>
  );
};

export default LoginFormContainer;
