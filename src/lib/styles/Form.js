import React from 'react';
import styled, { css } from 'styled-components';
import r from '../../lib/styles/Rem';
import palette from './paletts';

const StyledForm = styled.div`
  max-width: 100%;
  padding: ${r[16]}rem ${r[16]}rem;
  ${({ background }) =>
    background &&
    css`
      background: ${palette.orange5};
    `};
`;

const Form = ({ children, background = false }) => {
  return <StyledForm background={background}>{children}</StyledForm>;
};

export default Form;
