import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import locations from '../../lib/location/locations';
import { ReactComponent as DownArrow } from '../../assets/downArrow.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import HeaderModal from './HeaderModal';

const HeaderBlock = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 36rem;

  z-index: 999;

  padding: ${r[10]}rem ${r[16]}rem;
  background: ${palette.white};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
`;

const HeaderText = styled.p`
  margin: 0;
  font-size: ${r[18]}rem;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  line-height: 1.67;
  letter-spacing: -0.7px;

  color: ${palette.black};
`;

const Spacer = styled.div`
  width: 100%;
  height: ${r[48]}rem;
`;

const Header = ({ title = true }) => {
  const [modal, setModal] = useState(false);
  const [location, setLocation] = useState('전체');
  const onModalClick = () => {
    setModal(!modal);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = (location) => {
    setModal(false);
    setLocation(location);
  };

  return (
    <>
      <HeaderModal
        locations={locations}
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
      <HeaderBlock>
        <Wrapper>
          <HeaderContainer onClick={onModalClick}>
            <HeaderText>서울 {location}</HeaderText>
            <DownArrow style={{ marginLeft: `${r[4]}rem` }} />
          </HeaderContainer>
          <Link to="/login">
            로그인
            <DownArrow />
          </Link>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
