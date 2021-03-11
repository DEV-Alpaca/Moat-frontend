import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import Text from '../common/Text';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Padding from '../common/Padding';
import r from '../../lib/styles/Rem';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
`;

const StyledDiv = styled(Form)`
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  width: 100%;
  max-width: 36rem;
  padding-top: ${r[26]}rem;
`;

const LoginForm = ({
  onChange,
  phone_number,
  onSubmit,
  onFocus,
  password,
  errorMessage,
  error,
}) => {
  return (
    <>
      <Form>
        <Title>로그인</Title>
        <Padding />
        <Padding />
        {!error && phone_number && <Text input>전화번호</Text>}
        <form onSubmit={onSubmit}>
          <Input
            name="phone_number"
            value={phone_number}
            onChange={onChange}
            placeholder=" 전화번호를 입력하세요."
            error={error}
          />
          {error && <Text error>{errorMessage.login}</Text>}
          <Padding />
          {!error && password && (
            <Text input>비밀번호는 영어, 숫자 6글자 이상으로 만드셈</Text>
          )}
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            onFocus={onFocus}
            placeholder=" 비밀번호를 입력하세요."
            error={error}
          />
          {error && <Text error>{errorMessage.password}</Text>}
          <Padding />
          <Button>로그인</Button>
        </form>
      </Form>
      <Container>
        <StyledDiv background={`${palette.orange5}`}>
          <Text fontWeight={800}> 아직 가입 전이신가요?</Text>
          <Text gray fontSize={16}>
            모앗에서 가입하고 동네에서 경험을 나눠보세요.
          </Text>
          <Padding />
          <Button
            to="/auth"
            white
            style={{ border: `1px solid ${palette.orange}`, fontWeight: '800' }}
          >
            회원가입
          </Button>
          <Padding />
          <Link to="auth/?passwordChange=true">
            <Text
              gray
              style={{
                cursor: 'pointer',
                textAlign: 'center',
                marginBottom: `${r[28]}rem`,
              }}
              fontSize={18}
            >
              비밀번호를 잊어버렸어요
            </Text>
          </Link>
        </StyledDiv>
      </Container>
    </>
  );
};

export default LoginForm;
