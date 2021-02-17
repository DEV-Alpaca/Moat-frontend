import React from 'react';
import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import SelectLocation from '../components/write/SelectLocation';

const SelectLocationPage = () => {
  return (
    <>
      <Nav close text={'모임 만들기'} />
      <SelectLocation />
    </>
  );
};

export default SelectLocationPage;
