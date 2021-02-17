import React from 'react';
import styled, { css } from 'styled-components';
import r from '../../lib/styles/Rem';

const PaddingBlock = styled.div`
  width: 100%;
  height: ${r[16]}rem;

  ${({ height }) =>
    height &&
    css`
      height: ${height}rem;
    `}
`;

const Padding = (props) => {
  return <PaddingBlock {...props} />;
};

export default Padding;
