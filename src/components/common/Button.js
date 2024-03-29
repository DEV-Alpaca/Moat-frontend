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
  color: ${palette.black};

  background: ${palette.orange};

  font-size: ${r[20]}rem;
  font-weight: 700;
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

    ${(props) =>
    props.hover &&
    css`
      background: ${palette.orange5};
      border: 2px solid ${palette.orange};
      font-weight: 700;
    `}
    
    ${(props) =>
    props.active &&
    css`
      color: ${palette.black};
      background: ${palette.orange5};
      border: 2px solid ${palette.orange};
      font-weight: 700;
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
    <StyledLink
      {...props}
      white={props.white ? 1 : 0}
      closed={props.closed ? 1 : 0}
      full={props.full ? 1 : 0}
      hover={props.hover ? 1 : 0}
      active={props.active ? 1 : 0}
    />
  ) : (
    <StyledButton {...props} />
  );
};

export default Button;
