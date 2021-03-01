import React from 'react';
import Nav from '../components/common/Nav';
import WarningForm from '../components/write/WarningForm';

const WritePage = () => {
  return (
    <>
      <Nav close text={'모앗 만들기'} />
      <WarningForm />
    </>
  );
};

export default WritePage;
