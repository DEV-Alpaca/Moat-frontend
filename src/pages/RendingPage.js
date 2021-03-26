import React from 'react';
import styled from 'styled-components';
import Title from '../components/common/Title';

import { ReactComponent as Image1 } from '../assets/1.svg';
import { ReactComponent as Image2 } from '../assets/2.svg';
import { ReactComponent as Image3 } from '../assets/3.svg';
import { ReactComponent as Image4 } from '../assets/4.svg';
import palette from '../lib/styles/paletts';
import Text from '../components/common/Text';
import Padding from '../components/common/Padding';

const RendingPageBlock = styled.div`
  background-color: ${palette.orange5};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
`;

const Img = styled.img`
  width: 100%;
`;

const RendingPage = () => {
  return (
    <>
      <RendingPageBlock>
        <Container>
          <Image1 />
          <Padding height={56} />
          <Text fontSize={40} textAlign="center" fontWeight={800}>
            우리동네 시니어의
            <br />
            재능공유,
            <Text
              fontSize={40}
              textAlign="center"
              fontWeight={800}
              style={{ display: 'inline' }}
            >
              모앗
            </Text>
          </Text>
          <Padding />
          <Image2 />
        </Container>
        <Img src={process.env.PUBLIC_URL + '5.png'} alt="안내서" />
        <Padding height={40} />
        <Text orange fontSize={26} textAlign="center" fontWeight={800}>
          COMING SOON
        </Text>
        <Text fontSize={30} textAlign="center" fontWeight={1000}>
          모앗은 2021년 4월에
          <br />
          런칭됩니다.
        </Text>
        <Padding />
        <Text fontSize={16} textAlign="center" gray>
          조금만 기다려주세요!
        </Text>
        <Img src={process.env.PUBLIC_URL + '6.png'} alt="안내서" />
      </RendingPageBlock>
    </>
  );
};

export default RendingPage;
