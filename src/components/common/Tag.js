import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  border: none;
  background-color: ${palette.black7};
  color: ${palette.orange};

  padding: ${r[8]}rem ${r[16]}rem;
  width: auto;

  ${(props) =>
    props.closed &&
    css`
      /* width: ${r[98]}rem; */
      background: ${palette.black};
      color: ${palette.white};
    `}
`;

const Tag = ({ children, ...rest }) => {
  return <TagBlock {...rest}>{children}</TagBlock>;
};

export default Tag;
