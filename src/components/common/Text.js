import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const StyledText = styled.p`
  margin: 0;
  width: 100%;
  font-size: ${r[18]}rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: -0.7px;
  text-align: center;

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

const Title = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>;
};

export default Title;
