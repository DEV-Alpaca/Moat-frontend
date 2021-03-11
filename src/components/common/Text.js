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
  line-height: 1.6;
  letter-spacing: -0.03em;
  text-align: left;
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
    `};

  ${(props) =>
    props.red &&
    css`
      color: ${palette.red};
    `};

  ${(props) =>
    props.closed &&
    css`
      color: var(--black);
    `}

  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: ${props.marginLeft}rem;
    `};

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop}rem;
    `};

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom}rem;
    `};

  ${(props) =>
    props.error &&
    css`
      margin-top: ${r[3]}rem;
      margin-left: ${r[12]}rem;
      font-size: ${r[18]}rem;
      font-weight: 700;
      color: ${palette.red};
    `};
`;

const Text = ({ children, ...rest }) => {
  return <StyledText {...rest}>{children}</StyledText>;
};

export default Text;
