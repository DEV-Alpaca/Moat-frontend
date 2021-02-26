import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Profile } from '../../assets/profile.svg';

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
  cursor: pointer;
`;

const Spacer = styled.div`
  width: 100%;
  height: ${r[48]}rem;
`;

const Header = ({ title = true }) => {
  const [modal, setModal] = useState(false);
  const onNavClick = () => {
    setModal(true);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
  };

  return (
    <>
      <HeaderModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      <HeaderBlock>
        <Wrapper>
          <HeaderContainer>
            <HeaderText>서울 전체</HeaderText>
            <DownArrow
              onClick={onNavClick}
              style={{ marginLeft: `${r[4]}rem` }}
            />
          </HeaderContainer>
          <DownArrow />
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
