import React from 'react';
import styled from 'styled-components';
import r from '../../lib/styles/Rem';

const FullScreenBlock = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 100;

  top: 0;
  width: 100%;
  max-width: 36rem;
  height: 100%;
  padding: 0 ${r[16]}rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.25);
`;

const FullScreen = ({ children }) => {
  return <FullScreenBlock>{children}</FullScreenBlock>;
};

export default FullScreen;
