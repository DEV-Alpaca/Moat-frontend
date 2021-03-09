import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';

const MainboardSliderBlock = styled.div`
  width: 100%;
  height: ${r[332]}rem;
  background: ${palette.orange5};
`;

const Div = styled.div`
  margin: 0 auto;
  height: ${r[300]}rem;
`;

const SliderButtonList = styled.div`
  position: static;
  box-sizing: border-box;
`;

const ArrowStyle = () => {
  return <div style={{ display: 'none' }}></div>;
};

const MainboardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    // autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: 'linear',

    pauseOnHover: true,

    appendDots: (dots) => <SliderButtonList>{dots}</SliderButtonList>,
    nextArrow: <ArrowStyle />,
    prevArrow: <ArrowStyle />,
  };

  return (
    <MainboardSliderBlock>
      <Slider {...settings}>
        <Div>
          <img
            style={{ width: '320px' }}
            src={process.env.PUBLIC_URL + 'Mainboard1.jpg'}
            alt="Mainboard1"
          ></img>
          <h3>편안한밥집</h3>
        </Div>
        <Div>
          <h3>배달</h3>
        </Div>

        <Div>
          <h3>순대국밥</h3>
        </Div>
      </Slider>
    </MainboardSliderBlock>
  );
};

export default MainboardSlider;
