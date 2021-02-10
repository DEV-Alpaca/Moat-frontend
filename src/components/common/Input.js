import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const StyledInput = styled.input`
  width: 100%;
  height: ${r[52]}rem;
  border-radius: 8px;

  padding: 0;
  border: solid 1px ${palette.gray[200]};
  font-size: ${r[20]}rem;
  color: ${palette.black};

  font-weight: 500;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';

  ::-webkit-input-placeholder {
    margin: 0;
  }

  &:focus {
    border: 1px solid ${palette.orange};
  }

  & + & {
    margin-top: ${r[16]}rem;
  }
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
    <StyledInput
      {...rest}
      // name={name}
      // value={value}
      // type={type}
      // onChange={onChange}
      // onSubmit={onSubmit}
      // placeholder={placeholder}
    />
  );
};

export default Input;
