import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Block = styled.div`
  display: flex;
  position: fixed;
  z-index: 9999;
`;

const Div = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid red;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <Block>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Div>
            <h3>1</h3>
          </Div>
          <Div>
            <h3>2</h3>
          </Div>
          <Div>
            <h3>3</h3>
          </Div>
        </Slider>
      </Block>
    );
  }
}
