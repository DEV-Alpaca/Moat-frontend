import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Goback } from '../../assets/goback.svg';
import { ReactComponent as Close } from '../../assets/X.svg';
import { ReactComponent as Home } from '../../assets/home.svg';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import { Link, withRouter } from 'react-router-dom';

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 36rem;

  z-index: 9999;

  padding: ${r[10]}rem ${r[16]}rem;
  background: ${palette.white};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  history,
  goback = false,
  close = false,
  home = false,
  text = '',
  notSpacer = false,
}) => {
  return (
    <>
      <Wrapper>
        <Container>
          {goback && (
            <Goback
              style={{ cursor: 'pointer' }}
              onClick={() => history.goBack()}
            />
          )}
          {close && (
            <Link to="/">
              <Close style={{ cursor: 'pointer' }} />
            </Link>
          )}
          <NavText>{text}</NavText>
          {home ? <Home style={{ cursor: 'pointer' }} /> : <Space />}
        </Container>
      </Wrapper>
      {!notSpacer && <Spacer />}
    </>
  );
};

export default withRouter(Nav);
