import React from 'react';
import Nav from '../components/common/Nav';
import WriteFormContainer from '../containers/write/WriteFormContainer';

const WritePage = () => {
  return (
    <>
      <Nav goback text={'서대문&마포구 모임 만들기'} />
      <WriteFormContainer />
    </>
  );
};

export default WritePage;
