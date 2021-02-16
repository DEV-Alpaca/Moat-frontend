import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Goback } from '../../assets/goback.svg';
import { ReactComponent as Close } from '../../assets/X.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const NavBlock = styled.div``;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;

  padding-left: ${r[16]}rem;
  padding-right: ${r[16]}rem;
  background: ${palette.white};
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
  cursor: pointer;
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
          {goback && <Goback style={{ cursor: 'pointer' }} />}
          {close && <Close style={{ cursor: 'pointer' }} />}
          <NavText>{text}</NavText>
          {home ? <Home style={{ cursor: 'pointer' }} /> : <Space />}
        </Wrapper>
      </NavBlock>
    </>
  );
};

export default Nav;
