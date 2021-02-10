import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Hamburger } from '../../assets/hamburgermenu.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const HeaderBlock = styled.div`
  position: fixed;
  top: 0;
  width: 34.23rem;
  padding-left: ${r[16]}rem;
  padding-right: ${r[16]}rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${r[48]}rem;
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

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Hamburger />
          <HeaderText>모앗</HeaderText>
          <HeaderText style={{ color: `${palette.orange}` }}>로그인</HeaderText>
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
