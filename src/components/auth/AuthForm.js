import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import Title from '../../components/common/Title';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Padding from '../common/Padding';

import { ReactComponent as Check } from '../../assets/greencheck.svg';
import Text from '../common/Text';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  max-width: 36rem;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 8px;
  padding: 0 ${r[6]}rem;

  border: solid 1px ${palette.gray[200]};
  outline: none;

  &:hover {
    border-color: ${palette.orange};
  }
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 70%;
  margin: 0 auto;
  height: ${r[52]}rem;

  margin: 0;
  padding: 0;
  font-size: ${r[20]}rem;
  color: ${palette.black};
  font-weight: normal;
  border: none;
  outline: none;
`;

const StyledAuthButton = styled(Button)`
  display: flex;
  align-items: center;
  height: ${r[40]}rem;

  padding: 0 ${r[12]}rem;
  width: auto;
  height: ${r[40]}rem;
  font-size: ${r[18]}rem;
`;

const AuthForm = ({
  isPasswordChange,
  onChange,
  onSubmit,
  phone_number,
  phone_numberConfirm,
  error,
  errorMessage,
}) => {
  const [ready, setReady] = useState(false);
  const [againButton, setAgainButton] = useState(false);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (phone_number.length === 11) {
      setReady(true);
      return;
    }
    setAgainButton(false);
    setReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone_number, phone_numberConfirm]);

  useEffect(() => {
    if (phone_numberConfirm.length === 4) {
      setCheck(true);
      return;
    }
    setCheck(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone_numberConfirm]);

  return (
    <>
      {console.log(check)}
      <Form>
        <Padding />
        <Title>
          휴대전화번호를
          <br />
          인증해주세요.
        </Title>
        <Padding height={60} />
        {!error && phone_number && <Text input>전화번호</Text>}
        <StyledDiv>
          <StyledInput
            name="phone_number"
            value={phone_number}
            onChange={onChange}
            placeholder="전화번호를 입력해주세요."
            maxLength="11"
          ></StyledInput>
          {!ready && <StyledAuthButton closed>인증하기</StyledAuthButton>}
          {ready && (
            <StyledAuthButton
              onClick={() => {
                setAgainButton(true);
                alert('인증 번호 전송');
              }}
            >
              {againButton ? '다시하기' : '인증하기'}
            </StyledAuthButton>
          )}
        </StyledDiv>
        {againButton && (
          <Text
            error
            style={{ color: `${palette.gray[400]}`, fontWeight: '450' }}
          >
            인증번호가 전송 되었습니다!
          </Text>
        )}
        <Padding />
        {!error && phone_numberConfirm && <Text input>인증번호 입력</Text>}
        <StyledDiv>
          <StyledInput
            name="phone_numberConfirm"
            value={phone_numberConfirm}
            onChange={onChange}
            placeholder="인증번호를 입력해주세요."
            error={error}
            maxLength="4"
          ></StyledInput>
          {!error && check && <Check style={{ marginRight: `${r[3]}rem` }} />}
        </StyledDiv>
        {error && <Text error>{errorMessage}</Text>}
      </Form>
      <StyledButton
        full
        fontSize={23}
        fontWeight={500}
        to={isPasswordChange ? '/passwordChange' : '/register'}
      >
        다음으로
      </StyledButton>
      {/* <StyledButton closed full fontSize={23} fontWeight={500}>
        다음으로
      </StyledButton> */}
    </>
  );
};

export default AuthForm;
