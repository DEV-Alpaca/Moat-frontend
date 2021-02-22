import React from 'react';
import styled from 'styled-components';

const FullScreenBlock = styled.div`
  box-sizing: border-box;
  position: fixed;
  z-index: 9999;

  top: 0;
  width: 100%;
  max-width: 36rem;
  height: 100%;

  background: rgba(0, 0, 0, 0.25);
`;

const FullScreen = ({ children }) => {
  return <FullScreenBlock>{children}</FullScreenBlock>;
};

export default FullScreen;
