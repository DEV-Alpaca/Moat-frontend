import React, { useState } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';
import Button from '../../common/Button';
import Padding from '../../common/Padding';
import SliderItem from './SliderItem';

const Block = styled.div`
  width: 100%;
  min-height: 100%;
`;

const Div = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  height: 500px;
  width: 100%;
  background: ${palette.orange5};
`;

const WriteInfoSliderBlock = styled.div`
  width: 100%;
  position: static;
`;

const SliderButtonList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  box-sizing: border-box;
  background: ${palette.orange5};
  z-index: 9999;
`;

const ArrowDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 13;
  padding: ${r[16]}rem ${r[16]}rem;
  background: ${palette.orange5};
`;

const NextArrowButton = styled(Button)``;

const ArrowNoneStyle = () => {
  return <div style={{ display: 'none' }}></div>;
};

const WriteInfoSlider = () => {
  const [page, setPage] = useState(0);
  const buttonText = [
    { id: 0, text: '알아보기' },
    { id: 1, text: '다음으로' },
    { id: 2, text: '신청으로' },
  ];
  const NextArrowStyle = ({ onClick }) => {
    return (
      <ArrowDiv>
        <NextArrowButton onClick={onClick} to={page === 2 ? '/write' : null}>
          {buttonText[page].text}
        </NextArrowButton>
      </ArrowDiv>
    );
  };

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,

    speed: 200,
    cssEase: 'linear',

    appendDots: (dots) => <SliderButtonList>{dots}</SliderButtonList>,
    nextArrow: <NextArrowStyle />,
    prevArrow: <ArrowNoneStyle />,

    afterChange: (current) => setPage(current),
  };

  return (
    <Block className="Block">
      <WriteInfoSliderBlock className="WriteInfoSliderBlock">
        <Slider {...settings} className="Slider">
          <SliderItem page={page} />
          <SliderItem page={page} />
          <SliderItem page={page} />
        </Slider>
        <Padding className="Block2" height={92} />
      </WriteInfoSliderBlock>
    </Block>
  );
};

export default WriteInfoSlider;
