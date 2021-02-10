import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const StyledText = styled.p`
  margin: 0;
  font-size: ${r[18]}rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.7px;
  text-align: center;

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${fontWeight};
    `}

  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${r[props.fontSize]}rem;
    `}

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}

  ${(props) =>
    props.gray &&
    css`
      color: ${palette.gray[400]};
    `}

  ${(props) =>
    props.orange &&
    css`
      color: ${palette.orange};
    `}
`;

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
