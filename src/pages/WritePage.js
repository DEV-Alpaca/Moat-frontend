import React from 'react';
import Nav from '../components/common/Nav';
import WriteForm from '../components/write/WriteForm';

const WritePage = () => {
  return (
    <>
      <Nav goback text={'서대문&마포구 모임 만들기'} />
      <WriteForm />
    </>
  );
};

export default WritePage;
