import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';

import { Link } from 'react-router-dom';
import r from '../../lib/styles/Rem';

const buttonStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  height: ${r[60]}rem;
  padding: ${r[16]}rem;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  & + & {
    margin-bottom: ${r[16]}rem;
  }

  background: ${palette.orange};

  font-size: ${r[20]}rem;
  font-weight: bold;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: -0.4px;
  text-align: center;

  ${(props) =>
    props.full &&
    css`
      border-radius: 0px;
    `}

  ${(props) =>
    props.white &&
    css`
      border: 1px solid ${palette.gray[200]};
      background: ${palette.white};
      color: black;
    `}

    ${(props) =>
    props.closed &&
    css`
      background: ${palette.gray[200]};
      color: #9a9a9a;
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
`;
const Button = (props) => {
  return props.to ? (
    <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
