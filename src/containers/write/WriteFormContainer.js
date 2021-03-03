import React from 'react';
import styled from 'styled-components';
import WriteForm from '../../components/write/WriteForm';

const WriteFormContainerBlock = styled.div``;

const WriteFormContainer = () => {
  return (
    <WriteFormContainerBlock>
      <WriteForm />
    </WriteFormContainerBlock>
  );
};

export default WriteFormContainer;
