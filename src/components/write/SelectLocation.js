import React, { useState } from 'react';
import styled from 'styled-components';
import locations from '../../lib/location/locations';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Padding from '../common/Padding';
import Text from '../common/Text';
import { ReactComponent as OrangeCheck } from '../../assets/orangeCheck.svg';

const StyledButton = styled(Button)`
  margin-top: ${r[16]}rem;
  border: 1px solid ${palette.gray[200]};
  &:hover {
    background: ${palette.orange5};
    border: 2px solid ${palette.orange};
    font-weight: 700;
  }
  &:active {
    background: ${palette.orange5};
    border: 2px solid ${palette.orange};
    font-weight: 700;
  }
`;

const SelectLocation = () => {
  const [selectCategory, setSelectCategory] = useState('전체 글');

  const onSelect = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <Form>
        <Text fontSize={26} fontWeight={700}>
          어느 지역의 모임인가요?
        </Text>
        <Padding height={10} />
        {locations.seoul.district.map((location) => (
          <StyledButton
            to="/writeInfo"
            white
            key={location}
            hover={selectCategory === location}
            active={selectCategory === location}
            onClick={() => {
              onSelect(location);
            }}
          >
            {selectCategory === location ? (
              <OrangeCheck style={{ marginRight: `${r[8]}rem` }} />
            ) : null}
            {location === '그 외 지역' ? locations.seoul.name : null} {location}
          </StyledButton>
        ))}
      </Form>
    </>
  );
};

export default SelectLocation;
