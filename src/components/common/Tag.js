import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${r[81]}rem;
  height: ${r[40]}rem;

  border-radius: 4px;
  border: ${palette.orange};
  background-color: ${palette.orange5};
  color: ${palette.orange};

  ${(props) =>
    props.green &&
    css`
      width: ${r[98]}rem;
      background: ${palette.green5};
      border: ${palette.orange};
      color: ${palette.green};
    `}
`;

const Tag = ({ children, green = false }) => {
  return <TagBlock green={green}>{children}</TagBlock>;
};

export default Tag;
