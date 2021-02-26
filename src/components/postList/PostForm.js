import React from 'react';
import styled, { css } from 'styled-components';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';

import { ReactComponent as ImageSample } from '../../assets/sample.svg';

import Text from '../common/Text';
import BoldLine from '../common/BoldLine';
import Tag from '../common/Tag';
import Padding from '../common/Padding';

const PostFormBlock = styled.div``;

const Image = styled(ImageSample)`
  width: 100%;
  height: ${r[202]}rem;
  object-fit: contain;
  border-radius: 8px;
  margin: 0;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const PostForm = ({ closed = false }) => {
  return (
    <>
      <PostFormBlock closed>
        {closed ? (
          <Form style={{ opacity: '0.3' }}>
            <Image />
            <Padding height={`${r[10]}`} />
            <Text fontSize={23} fontWeight={500}>
              서대문구 마을공동체!! 음악 밴드 {'<'}모앗{'>'}새 멤버 모집합니다.
            </Text>
            <Padding height={`${r[10]}`} />
            <Text fontSize={20} fontWeight={600}>
              2,000원 (10분)
            </Text>
          </Form>
        ) : (
          <Form>
            <Image />
            나는 열린 폼
            <Padding height={`${r[10]}`} />
            <Text fontSize={23} fontWeight={500}>
              잠실 재개발위원회 소속입니다. 부동산 궁금한 점 물어보세요
            </Text>
            <Padding height={`${r[10]}`} />
            <Text fontSize={20} fontWeight={600}>
              2,000원 (10분)
            </Text>
          </Form>
        )}
        <BoldLine />
      </PostFormBlock>
    </>
  );
};

export default PostForm;
