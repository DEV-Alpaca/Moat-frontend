import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';
import Padding from '../common/Padding';
import Text from '../common/Text';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  max-width: 36rem;
  width: 100%;
`;

const RegisterForm = ({
  onChange,
  onSubmit,
  password,
  passwordConfirm,
  errorMessage,
  error,
}) => {
  return (
    <>
      <Form>
        <Padding />
        <Title>
          사용할 비밀번호를
          <br />
          입력해주세요.
        </Title>
        <Padding height={60} />
        <form onSubmit={onSubmit}>
          {!error && password && <Text input>비밀번호</Text>}
          <Input
            onChange={onChange}
            onSubmit={onSubmit}
            name="password"
            value={password}
            type="password"
            placeholder="비밀번호 입력 (6자리 이상)"
          />
          <Padding />
          {!error && passwordConfirm && <Text input>비밀번호 확인</Text>}
          <Input
            onChange={onChange}
            onSubmit={onSubmit}
            name="passwordConfirm"
            value={passwordConfirm}
            type="password"
            placeholder=" 비밀번호를 한번 더 확인해주세요."
          />
        </form>
        {error && <Text error>비밀번호를 다시 확인해주세요.</Text>}
      </Form>
      <StyledButton full to="/registerConfirm">
        다음으로
      </StyledButton>
      {/* <StyledButton closed full>
        회원가입
      </StyledButton> */}
    </>
  );
};

export default RegisterForm;
