import React from 'react';
import styled from 'styled-components';

import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import Title from '../../components/common/Title';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';
import Padding from '../common/Padding';

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  max-width: 36rem;
  width: 100%;
  height: ${r[70]}rem;
`;

const PasswordChangeForm = () => {
  return (
    <>
      <Form>
        <Padding />
        <Title>
          새로 사용할 비밀번호를
          <br />
          입력해주세요.
        </Title>
        <Padding height={`${r[60]}`} />
        <Input placeholder="비밀번호 입력 (6자리 이상)"></Input>
        <Padding />
        <Input
          type="password"
          placeholder=" 비밀번호를 한번 더 확인해주세요."
        ></Input>
      </Form>
      <StyledButton closed full>
        완료
      </StyledButton>
    </>
  );
};

export default PasswordChangeForm;
