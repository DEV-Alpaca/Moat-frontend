import React, { useState } from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Sample } from '../../assets/schedule.svg';
// import { ReactComponent as SS } from '../../assets/sample2.png';
import { ReactComponent as Guide } from '../../assets/guide.svg';

const FootBarBlock = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 36rem;
  height: ${r[56]}rem;
  z-index: 999;
  background: ${palette.white};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FootBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: ${r[56]}rem;
  /* opacity: 0.3; */
`;

const FootBarText = styled.p`
  margin: 0;
  font-size: ${r[16]}rem;

  font-weight: bold;
  line-height: 1.5;
  color: ${palette.black};
  cursor: pointer;
`;

const Spacer = styled.div`
  width: 100%;
  height: ${r[56]}rem;
`;

const FootBar = () => {
  return (
    <>
      <FootBarBlock>
        <Wrapper>
          <FootBarContainer>
            <Home />
            <FootBarText>홈</FootBarText>
          </FootBarContainer>
          <FootBarContainer>
            <Guide />
            <FootBarText>모앗 가이드</FootBarText>
          </FootBarContainer>
          <FootBarContainer>
            <Guide />
            {/* <img src="../../assets/sample2.png" alt="??" /> */}
            <FootBarText>마이페이지</FootBarText>
          </FootBarContainer>
        </Wrapper>
      </FootBarBlock>
      <Spacer />
    </>
  );
};

export default FootBar;
