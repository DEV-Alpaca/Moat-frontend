import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';

import { ReactComponent as ImageSample } from '../../assets/ImageSample.svg';

import Text from '../common/Text';
import BoldLine from '../common/BoldLine';
import Tag from '../common/Tag';
import Padding from '../common/Padding';
import { Link } from 'react-router-dom';

const PostFormBlock = styled.div``;

const ImageBlock = styled.div`
  position: relative;
  /* height: ${r[202]}rem; */
  width: 100%;
  height: 100%;
`;

const Image = styled(ImageSample)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  margin: 0;
`;

const StyledTag = styled(Tag)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: ${r[4]}rem;
  margin-bottom: ${r[10]}rem;
`;

const PostForm = ({ closed = false }) => {
  return (
    <>
      <PostFormBlock>
        {closed ? (
          <Form style={{ opacity: '0.3' }}>
            <ImageBlock>
              <Link to="/post">
                <Image />
              </Link>
              <StyledTag closed>신청 마감</StyledTag>
            </ImageBlock>
            <Padding height={10} />
            <Text fontSize={23} fontWeight={500}>
              서대문구 마을공동체!! 음악 밴드 {'<'}모앗{'>'}새 멤버 모집합니다.
            </Text>
            <Padding height={10} />
            <Text fontSize={20} fontWeight={600}>
              2,000원 (10분)
            </Text>
            <Padding height={8} />
          </Form>
        ) : (
          <Form>
            <ImageBlock>
              <Link to="/post">
                <Image />
              </Link>
              <StyledTag>전화/카톡</StyledTag>
            </ImageBlock>
            <Padding height={10} />
            <Text fontSize={23} fontWeight={500}>
              잠실 재개발위원회 소속입니다. 부동산 궁금한 점 물어보세요
            </Text>
            <Padding height={10} />
            <Text fontSize={20} fontWeight={600}>
              2,000원 (10분)
            </Text>
            <Padding height={8} />
          </Form>
        )}
        <BoldLine />
      </PostFormBlock>
    </>
  );
};

export default PostForm;
