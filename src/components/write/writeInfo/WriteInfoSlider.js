import React, { useState } from 'react';
import Slider from 'react-slick';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';
import Button from '../../common/Button';
import Padding from '../../common/Padding';
import {
  SliderItemPage1,
  SliderItemPage2,
  SliderItemPage3,
} from './SliderItem';

const Block = styled.div``;

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
  z-index: 9999;
  padding-top: ${r[16]}rem;

  ${(props) =>
    props.orange &&
    css`
      background: ${palette.orange5};
    `}
`;

const ArrowDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 13;
  padding: ${r[16]}rem ${r[16]}rem;

  ${(props) =>
    props.orange &&
    css`
      background: ${palette.orange5};
    `}
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
      <ArrowDiv orange={page === 1 ? 1 : 0}>
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

    speed: 100,
    cssEase: 'linear',

    appendDots: (dots) => (
      <SliderButtonList orange={page === 1 ? 1 : 0}>{dots}</SliderButtonList>
    ),
    nextArrow: <NextArrowStyle />,
    prevArrow: <ArrowNoneStyle />,

    afterChange: (current) => setPage(current),
  };

  return (
    <Block className="Block">
      <WriteInfoSliderBlock className="WriteInfoSliderBlock">
        <Slider {...settings} className="Slider">
          <SliderItemPage1 page={page} />
          <SliderItemPage2 page={page} />
          <SliderItemPage3 page={page} />
        </Slider>
        <Padding className="Absolute_Padding" height={92} />
      </WriteInfoSliderBlock>
    </Block>
  );
};

export default WriteInfoSlider;
