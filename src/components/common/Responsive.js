import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div``;

const Responsive = ({ chlidren, ...rest }) => {
  return <ResponsiveBlock {...rest}>Responsive{chlidren}</ResponsiveBlock>;
};

export default Responsive;
