import React from 'react';
import styled from 'styled-components';
import r from '../../lib/styles/Rem';

const StyledH1 = styled.h1`
  margin: 0;
  width: 100%;
  font-size: ${r[30]}rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.7px;
  text-align: left;
`;

const Title = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

export default Title;
