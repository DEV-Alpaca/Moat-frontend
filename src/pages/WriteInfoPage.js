import React from 'react';
import styled from 'styled-components';
import Nav from '../components/common/Nav';
import WriteInfoForm from '../components/write/writeInfo/WriteInfoForm';
import qs from 'qs';

const WriteInfoPageBlock = styled.div`
  position: relative;
  height: 100%;
`;

const WriteInfoPage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <WriteInfoPageBlock className="WriteInfoPageBlock">
      <Nav goback text={`${query.district} 재능나누기 신청`} />
      <WriteInfoForm />
    </WriteInfoPageBlock>
  );
};

export default WriteInfoPage;
