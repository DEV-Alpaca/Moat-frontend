import React from 'react';
import styled from 'styled-components';
import Button from '../../components/common/Button';

const WriteActionButtonBlock = styled.div``;

const WriteActionButton = () => {
  return (
    <WriteActionButtonBlock>
      <Button to="/writeComplete">신청완료</Button>
      {/* <Button closed>신청완료</Button> */}
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
