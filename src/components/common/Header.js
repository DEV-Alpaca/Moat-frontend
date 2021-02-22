import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Hamburger } from '../../assets/hamburgermenu.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import NavModal from './NavModal';

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
      <NavModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
      <HeaderBlock>
        <Wrapper>
          <Hamburger style={{ cursor: 'pointer' }} onClick={onNavClick} />
          <HeaderText>{title && '모앗'}</HeaderText>
          <HeaderText style={{ color: `${palette.orange}` }}>로그인</HeaderText>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
