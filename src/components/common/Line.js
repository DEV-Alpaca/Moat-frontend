import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';

const LineBlock = styled.div`
  width: 100%;
  height: 1px;
  background: ${palette.gray[100]};
`;

const Line = () => {
  return <LineBlock></LineBlock>;
};

export default Line;
