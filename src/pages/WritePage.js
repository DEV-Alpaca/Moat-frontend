import React from 'react';
import Nav from '../components/common/Nav';
import WriteFormContainer from '../containers/write/WriteFormContainer';
import qs from 'qs';

const WritePage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <Nav goback text={`${query.district} 재능나누기 신청`} />
      <WriteFormContainer district={query.district} />
    </>
  );
};

export default WritePage;
