import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Goback } from '../../assets/goback.svg';
import { ReactComponent as Close } from '../../assets/X.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const NavBlock = styled.div`
  position: fixed;
  top: 0;
  width: 34.23rem;
  padding-left: ${r[16]}rem;
  padding-right: ${r[16]}rem;

  /* padding: ${r[12]}rem ${r[16]}rem; */
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${r[48]}rem;
`;

const NavText = styled.p`
  margin: 0;
  font-size: ${r[18]}rem;

  font-weight: bold;
  font-stretch: normal;
  font-style: normal;

  line-height: 1.39;
  letter-spacing: -0.4px;

  color: ${palette.black};
`;
const Spacer = styled.div`
  width: 100%;
  height: ${r[48]}rem;
`;
const Space = styled.div`
  width: ${r[24]}rem;
`;

const Nav = ({
  goback = false,
  close = false,
  hamberger = false,
  home = false,
  text = '',
}) => {
  return (
    <>
      <NavBlock>
        <Wrapper>
          {goback && <Goback />}
          {close && <Close />}
          <NavText>{text}</NavText>
          {home ? <Home /> : <Space />}
        </Wrapper>
      </NavBlock>
      <Spacer />
    </>
  );
};

export default Nav;
