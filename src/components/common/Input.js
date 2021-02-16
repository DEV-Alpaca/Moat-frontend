import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const StyledDiv = styled.div`
  border-radius: 8px;
  padding-left: ${r[10]}rem;
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
`;

const StyledInput = styled.input`
  width: 90%;
  height: ${r[52]}rem;
  margin: 0;
  padding: 0;
  font-size: ${r[20]}rem;
  color: ${palette.black};
  font-weight: normal;
  border: none;
  outline: none;
`;

const Input = ({
  // type = '',
  // value = undefined,
  // name = '',
  // onChange = null,
  // onSubmit = null,
  // placeholder = '',
  ...rest
}) => {
  return (
    <StyledDiv>
      <StyledInput
        {...rest}
        // name={name}
        // value={value}
        // type={type}
        // onChange={onChange}
        // onSubmit={onSubmit}
        // placeholder={placeholder}
      />
    </StyledDiv>
  );
};

export default Input;
