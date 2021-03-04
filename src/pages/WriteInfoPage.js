import React from 'react';
import styled from 'styled-components';
import Nav from '../components/common/Nav';
import WriteInfoForm from '../components/write/writeInfo/WriteInfoForm';

const WriteInfoPageBlock = styled.div`
  position: relative;
  height: 100%;
`;

const WriteInfoPage = () => {
  return (
    <WriteInfoPageBlock className="WriteInfoPageBlock">
      <Nav goback text={'서대문구 재능나누기 신청'} />
      <WriteInfoForm />
    </WriteInfoPageBlock>
  );
};

export default WriteInfoPage;
