import React from 'react';
import styled from 'styled-components';
import WriteInfoForm from '../components/write/writeInfo/WriteInfoForm';

const WriteInfoPageBlock = styled.div``;

const WriteInfoPage = () => {
  return (
    <WriteInfoPageBlock>
      <WriteInfoForm />
    </WriteInfoPageBlock>
  );
};

export default WriteInfoPage;
