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
  background: ${palette.white};
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

const ImageContainer = styled.div`
  display: flex;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.img`
  width: ${r[56]}rem;
  height: ${r[80]}rem;
`;

const Img = styled.img`
  width: 100%;
`;

const subTitle = [
  '여러분의 삶의 경험와 연륜,  그 자체가 청년들의 지름길이됩니다.',
  '한 분야에서 오래 일하고 얻은 노하우!',
  '걱정마세요. 모앗에서 여러분의 컨텐츠를 매력적으로 바꿔드립니다!',
];
export const SliderItemPage1 = ({ page }) => {
  return (
    <>
      <SliderItemBlock>
        <Title>
          이런 것도 재능일까?
          <br />
          고민하지 마세요!
        </Title>

        <Padding height={8} />
        <SubTitle>{subTitle[0]}</SubTitle>
      </SliderItemBlock>
      <Img src={process.env.PUBLIC_URL + 'Picture1.png'} alt="여성 프로필" />
    </>
  );
};

export const SliderItemPage2 = ({ page }) => {
  return (
    <>
      <SliderItemBlock>
        <Title>
          그럼 어떤 게
          <br />
          재능이 될 수 있나요?
        </Title>
        <Padding height={8} />
        <SubTitle>{subTitle[1]}</SubTitle>
      </SliderItemBlock>
      <Padding height={32} />
      <ImageDiv>
        <ImageBlock>
          <ImageContainer>
            <Profile
              src={process.env.PUBLIC_URL + 'MenProfile.png'}
              alt="남성 프로필"
              style={{ marginRight: `${r[14]}rem` }}
            />
            <Block>
              <Text gray fontSize={16}>
                20년차 고등학교 선생님
              </Text>
              <Text fontWeight={700}>
                사범대 학생들! 교사가 되기를 고민한다면 진로상담해드려요!{' '}
              </Text>
            </Block>
          </ImageContainer>
        </ImageBlock>
        <ImageBlock>
          <ImageContainer>
            <Profile
              src={process.env.PUBLIC_URL + 'WomenProfile.png'}
              alt="여성 프로필"
              style={{ marginRight: `${r[14]}rem` }}
            />
            <Block>
              <Text gray fontSize={16}>
                망원동 토박이 공인중개사
              </Text>
              <Text fontWeight={700}>
                자취가 처음인 청년들! 허위매물 의심되면 물어보세요!
              </Text>
            </Block>
          </ImageContainer>
        </ImageBlock>
        <Background className="Orange5_background" />
      </ImageDiv>
    </>
  );
};

export const SliderItemPage3 = ({ page }) => {
  return (
    <>
      <SliderItemBlock>
        <Title>
          막상 글을 쓰려니
          <br />
          어려우신가요?
        </Title>
        <Padding height={8} />
        <SubTitle>{subTitle[2]}</SubTitle>
      </SliderItemBlock>
      <Img src={process.env.PUBLIC_URL + 'Picture2.png'} alt="여성 프로필" />
    </>
  );
};
