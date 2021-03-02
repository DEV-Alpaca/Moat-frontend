import React from 'react';
import styled from 'styled-components';
import locations, { lo } from '../../lib/location/locations';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Title from '../common/Title';

const StyledButton = styled(Button)`
  border: 1px solid ${palette.gray[200]};
  color: ${palette.gray[400]};
  margin-top: ${r[16]}rem;

  &:hover {
    background: ${palette.orange5};
    border: 2px solid ${palette.orange};
    color: ${palette.orange};
  }
`;

const SelectLocation = () => {
  // const loaction = Array.from(locations);
  return (
    <>
      {console.log(locations.seoul.district.map((lo) => <div>1{lo}</div>))}
      <Form>
        <Title>어느 지역의 모임인가요?</Title>

        {locations.seoul.district.map((lo) => (
          <StyledButton>{lo}</StyledButton>
        ))}
      </Form>
    </>
  );
};

export default SelectLocation;
