import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import { ReactComponent as Home } from '../../assets/home.svg';
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
  opacity: 0.3;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      opacity: 1;
    `}
`;

const FootBarText = styled.p`
  margin: 0;
  font-size: ${r[16]}rem;

  font-weight: bold;
  line-height: 1.5;
  color: ${palette.black};
`;

const Spacer = styled.div`
  width: 100%;
  height: ${r[56]}rem;
`;

const categories = ['홈', '모앗 가이드'];

const FootBar = () => {
  const [selectCategory, setSelectCategory] = useState('홈');
  const onSelect = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <FootBarBlock>
        <Wrapper>
          <FootBarContainer
            active={selectCategory === categories[0]}
            onClick={() => {
              onSelect(categories[0]);
            }}
          >
            <Home />
            <FootBarText>{categories[0]}</FootBarText>
          </FootBarContainer>
          <FootBarContainer
            active={selectCategory === categories[1]}
            onClick={() => {
              onSelect(categories[1]);
            }}
          >
            <Guide />
            <FootBarText>{categories[1]}</FootBarText>
          </FootBarContainer>
        </Wrapper>
      </FootBarBlock>
      <Spacer />
    </>
  );
};

export default FootBar;
