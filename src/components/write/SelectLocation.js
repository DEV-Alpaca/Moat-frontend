import React from 'react';
import styled, { css } from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Title from '../common/Title';

const StyledButton = styled(Button)`
  border: 1px solid ${palette.gray[200]};
  color: ${palette.gray[400]};
  margin-top: ${r[16]}rem;

  &:hover {
    background: ${palette.orange5};
    border: 2px solid ${palette.orange};
    color: ${palette.orange};
  }
`;

const SelectLocation = () => {
  return (
    <>
      <Form>
        <Title>어느 지역의 모임인가요?</Title>
        <StyledButton style={{ marginTop: `${r[24]}rem` }} white>
          서대문&마포구
        </StyledButton>
        <StyledButton white>송파구</StyledButton>
      </Form>
    </>
  );
};

export default SelectLocation;
