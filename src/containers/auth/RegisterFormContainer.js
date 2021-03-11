import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RegisterForm from '../../components/auth/RegisterForm';
import { changeField } from '../../modules/register';

const RegisterFormContainerBlock = styled.div``;

const RegisterFormContainer = () => {
  const dispatch = useDispatch();
  const { password, passwordConfirm } = useSelector(({ register }) => ({
    password: register.password,
    passwordConfirm: register.passwordConfirm,
  }));

  const [error, setError] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setError(false);
    dispatch(changeField({ key: name, value }));
  };

  const onCheck = () => {
    if ([password, passwordConfirm].includes('')) {
      alert('빈 칸을 모두 입력하세요.');
      return;
    }
    var regExpPw = /(?=.*\d{1,50})(?=.*[a-zA-Z]{1,50}).{6,50}$/;
    if (!regExpPw.test(password)) {
      alert('비밀번호는 최소 영어랑, 숫자 1개이상 포함');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      setError(true);
      return;
    }
    setIsNext(true);
    console.log('RegisterFormContainer/onCheck');
  };

  useEffect(() => {
    return () => {
      dispatch(changeField({ key: 'password', value: '' }));
      dispatch(changeField({ key: 'passwordConfirm', value: '' }));
    };
  }, []);
  return (
    <RegisterFormContainerBlock>
      <RegisterForm
        onChange={onChange}
        onCheck={onCheck}
        password={password}
        passwordConfirm={passwordConfirm}
        error={error}
        isNext={isNext}
        setIsNext={setIsNext}
      />
    </RegisterFormContainerBlock>
  );
};

export default RegisterFormContainer;
