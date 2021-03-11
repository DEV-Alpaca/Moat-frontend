import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Form from '../../../lib/styles/Form';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';
import Button from '../../common/Button';
import Padding from '../../common/Padding';
import Text from '../../common/Text';

const MainboardSliderBlock = styled.div`
  position: relative;
  width: 100%;

  background: ${palette.orange5};
`;

const Div = styled.div`
  position: relative;
  height: ${r[280]}rem;
  background: ${palette.orange5};
  outline: none;
`;

const Container = styled(Form)`
  position: relative;
  margin-top: 28px;
  background: none;
  z-index: 999;
`;

const SliderButtonList = styled.div`
  width: auto;
  position: absolute;
  bottom: ${r[22]}rem;
  left: ${r[16]}rem;
  box-sizing: border-box;
`;

const StlyedButton = styled(Button)`
  font-size: ${r[18]}rem;
  width: auto;
  height: auto;
  border: 1px solid ${palette.orange};
  z-index: 100;
`;

const Img = styled.img`
  width: 208px !important;
  height: 205px;
  position: absolute;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
`;

const sliderList = [
  {
    id: 1,
    title1: '시니어의 빛나는 경험을',
    title2: '만나보세요.',
    buttonText: '알아보기',
    imgPath: 'Mainboard1.jpg',
    padding: `${r[12]}rem ${r[48]}rem`,
  },
  {
    id: 2,
    title1: '당신이 쌓아온 지혜,',
    title2: '묻어두지 마세요.',
    buttonText: '어떻게 하나요?',
    imgPath: 'Mainboard1.jpg',
    padding: `${r[12]}rem ${r[25]}rem`,
  },
  {
    id: 3,
    title1: '시니어에게 무엇을',
    title2: '배우고 싶나요?',
    buttonText: '알려주고 기프티콘 받기',
    imgPath: 'Mainboard1.jpg',
    padding: `${r[12]}rem ${r[25]}rem`,
  },
];

const ArrowStyle = () => {
  return <div style={{ display: 'none' }}></div>;
};

const MainboardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: 'linear',

    pauseOnHover: true,

    appendDots: (dots) => <SliderButtonList>{dots}</SliderButtonList>,
    nextArrow: <ArrowStyle />,
    prevArrow: <ArrowStyle />,
  };

  return (
    <MainboardSliderBlock className="MainboardSliderBlock">
      <Slider {...settings}>
        {sliderList.map((item) => (
          <Div className="Div" key={item.id}>
            <Container>
              <Text fontSize={30} fontWeight={800}>
                {item.title1} <br />
                {item.title2}
              </Text>
              <Padding />
              <StlyedButton white style={{ padding: `${item.padding}` }}>
                {item.buttonText}
              </StlyedButton>
            </Container>
            <Img
              style={{ width: '320px' }}
              src={process.env.PUBLIC_URL + `${item.imgPath}`}
              alt="Mainboard이미지"
            ></Img>
          </Div>
        ))}
      </Slider>
    </MainboardSliderBlock>
  );
};

export default MainboardSlider;
