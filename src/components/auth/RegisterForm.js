import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import Input from '../common/Input';
import Title from '../common/Title';
import Form from '../../lib/styles/Form';
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
  onCheck,
  password,
  passwordConfirm,
  error,
  isNext,
  setIsNext,
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (password) {
      if (password.length === passwordConfirm.length) {
        setReady(true);
        return;
      }
    }
    setReady(false);
    setIsNext(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passwordConfirm]);
  return (
    <>
      {console.log('ready, isNext, error', ready, isNext, error)}
      <Form>
        <Padding />
        <Title>
          사용할 비밀번호를
          <br />
          입력해주세요.
        </Title>
        <Padding height={60} />
        {!error && password && <Text input>비밀번호</Text>}
        <Input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="비밀번호 입력 (6자리 이상)"
        />
        <Padding />
        {passwordConfirm && <Text input>비밀번호 확인</Text>}
        <Input
          onChange={onChange}
          name="passwordConfirm"
          value={passwordConfirm}
          type="password"
          placeholder=" 비밀번호를 한번 더 확인해주세요."
          error={passwordConfirm && error}
        />
        {error && <Text error>비밀번호를 다시 확인해주세요.</Text>}
      </Form>
      <Button onClick={onCheck} style={{ width: 'auto' }} closed={!ready}>
        {isNext ? '확인완료' : '확인하기'}
      </Button>
      <StyledButton
        full
        closed={!isNext}
        to={!isNext ? null : '/registerConfirm'}
      >
        다음으로
      </StyledButton>
    </>
  );
};

export default RegisterForm;
