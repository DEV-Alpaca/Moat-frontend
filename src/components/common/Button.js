import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import { Link } from 'react-router-dom';

const buttonStyle = css`
  width: 100%;
  height: rem;
  margin-top: 32px;
  padding: 16px 136.5px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  background: ${palette.orange};

  font-size: 20px;
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

/* 
color : orange, white

1. 주황/ 흰색글씨 버튼 default border x
2. 흰색/ 검정글씨 버튼 white버튼 border 얕은회색

closed 버튼
3. 회색/ 짙은회색 버튼

fullScreen버튼
4. width 100% 버튼

*/
