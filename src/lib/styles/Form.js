import React from 'react';
import styled, { css } from 'styled-components';
import r from '../../lib/styles/Rem';
import palette from './paletts';

const StyledForm = styled.div`
  max-width: 100%;
  padding: ${r[16]}rem ${r[16]}rem;
  background: ${palette.white};

  ${({ background }) =>
    background &&
    css`
      background: ${background};
    `};
`;

const Form = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

export default Form;
