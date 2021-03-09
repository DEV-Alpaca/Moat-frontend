import React from 'react';
import styled from 'styled-components';
import WriteActionButton from '../../components/write/WriteActionButton';

const WriteActionButtonContainerBlock = styled.div``;

const WriteActionButtonContainer = () => {
  return (
    <WriteActionButtonContainerBlock>
      <WriteActionButton />
    </WriteActionButtonContainerBlock>
  );
};

export default WriteActionButtonContainer;
