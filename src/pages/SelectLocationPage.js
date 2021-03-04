import React from 'react';
import Nav from '../components/common/Nav';
import SelectLocation from '../components/write/SelectLocation';

const SelectLocationPage = () => {
  return (
    <>
      <Nav close text={'재능 나누기 신청'} />
      <SelectLocation />
    </>
  );
};

export default SelectLocationPage;
