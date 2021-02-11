import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const LineBlock = styled.div`
  width: 100%;
  height: ${r[8]}rem;
  background: ${palette.gray[50]};
`;

const BoldLine = () => {
  return <LineBlock></LineBlock>;
};

export default BoldLine;
