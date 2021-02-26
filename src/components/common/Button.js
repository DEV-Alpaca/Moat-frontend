import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';

import { Link } from 'react-router-dom';
import r from '../../lib/styles/Rem';

const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${r[60]}rem;

  outline: none;
  border: none;
  border-radius: 8px;
  color: white;

  background: ${palette.orange};

  font-size: ${r[20]}rem;
  font-weight: normal;
  font-stretch: normal;
  line-height: 1.4;
  letter-spacing: -0.4px;
  text-align: center;

  cursor: pointer;

  ${(props) =>
    props.full &&
    css`
      border-radius: 0px;
      font-size: ${r[23]}rem;
      font-weight: 500;
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
      background: ${palette.gray[100]};
      color: ${palette.gray[200]};
      font-size: ${r[23]}rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.fontWeight &&
    css`
      font-weight: ${props.fontWeight};
    `}

    ${(props) =>
    props.fontSize &&
    css`
      font-size: ${r[props.fontSize]}rem;
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
