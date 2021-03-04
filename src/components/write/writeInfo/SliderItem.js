import React from 'react';
import styled from 'styled-components';
import Form from '../../../lib/styles/Form';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';
import Padding from '../../common/Padding';
import Text from '../../common/Text';

const SliderItemBlock = styled(Form)`
  position: relative;
`;

const Title = styled(Text)`
  text-align: center;
  font-size: ${r[30]}rem;
  color: ${palette.black};
  font-weight: 800;
  z-index: 2;
`;
const SubTitle = styled(Text)`
  text-align: center;
  font-size: ${r[20]}rem;
  color: ${palette.gray[300]};
  z-index: 2;
`;

const ImageDiv = styled.div`
  position: relative;
  background: ${palette.orange5};
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: ${r[35]}rem;
  background: ${palette.red};
`;

const ImageBlock = styled.div`
  position: relative;
  z-index: 100;
  box-sizing: border-box;
  margin: 0 ${r[16]}rem;
  height: ${r[130]}rem;
  padding: ${r[20]}rem ${r[16]}rem;
  border-radius: 8px;
  box-shadow: 0 2px 16px 0 rgba(246, 155, 18, 0.2);
  background: ${palette.white};

  border: 1px solid green;
  p + & {
    margin-top: ${r[40]}rem;
  }
  & + & {
    margin-top: ${r[24]}rem;
  }
`;

const SliderItem = ({ page }) => {
  return (
    <>
      <SliderItemBlock>
        <Title>
          이런 것도 재능일까?
          <br />
          고민하지 마세요!
        </Title>
        <Padding height={8} />
        <SubTitle>
          2. 세상을 살아오며 쌓인 연륜과 지혜!
          {/* 여러분의 삶의 경험와 연륜, 그 자체가 <br />
        청년들의 지름길이됩니다. */}
        </SubTitle>
      </SliderItemBlock>
      <Padding height={32} />
      <ImageDiv>
        <ImageBlock></ImageBlock>
        <ImageBlock></ImageBlock>
        <Background className="Orange5_background" />
      </ImageDiv>
    </>
  );
};

export default SliderItem;
