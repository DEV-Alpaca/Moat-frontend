import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const StyledDiv = styled.div`
  border-radius: 8px;
  padding: 0 ${r[10]}rem;

  border: solid 1px ${palette.gray[200]};

  outline: none;
  &:hover {
    border: 1px solid ${palette.orange};
  }
  &:active {
    border: 1px solid ${palette.orange};
  }
  &:focus {
    border: 1px solid ${palette.orange};
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid ${palette.red};
    `};
`;

const StyledInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: ${r[52]}rem;
  margin: 0;
  padding: 0;
  font-size: ${r[20]}rem;
  color: ${palette.black};
  font-weight: normal;
  border: none;
  outline: none;
`;

const Input = ({ error, ...rest }) => {
  return (
    <StyledDiv error={error === true ? 1 : 0}>
      <StyledInput {...rest} />
    </StyledDiv>
  );
};

export default Input;
