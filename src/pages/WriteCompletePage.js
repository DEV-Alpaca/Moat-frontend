import React from 'react';
import styled from 'styled-components';
import Nav from '../components/common/Nav';
import WriteCompleteForm from '../components/write/WriteCompleteForm';

const WriteCompletePageBlock = styled.div``;

const WriteCompletePage = () => {
  return (
    <WriteCompletePageBlock>
      <Nav close home />
      <WriteCompleteForm />
    </WriteCompletePageBlock>
  );
};

export default WriteCompletePage;
