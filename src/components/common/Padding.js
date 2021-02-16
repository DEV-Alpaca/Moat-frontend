import React from 'react';
import styled from 'styled-components';
import r from '../../lib/styles/Rem';

const PaddingBlock = styled.div`
  width: 100%;
  height: ${r[16]}rem;
`;

const Padding = () => {
  return <PaddingBlock />;
};

export default Padding;
