import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';

import { ReactComponent as Sample } from '../../assets/sample.svg';
import { ReactComponent as Schedule } from '../../assets/schedule.svg';
import { ReactComponent as Location } from '../../assets/location.svg';

import Text from '../common/Text';
import Line from '../common/Line';
import BoldLine from '../common/BoldLine';
import Tag from '../common/Tag';

const PostFormBlock = styled.div``;

const Image = styled(Sample)`
  width: 100%;
  height: 15rem;
  object-fit: contain;
  border-radius: 8px;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const PostForm = () => {
  return (
    <PostFormBlock>
      <Form>
        <Image />
        <Text fontSize={23} textAlign={'left'} fontWeight={800}>
          현직 목수입니다. 자신만의 가구 만들 분, 만 원에 가르쳐드려요
        </Text>
      </Form>
      <Line />
      <Form>
        <Block>
          <Schedule style={{ marginRight: `${r[8]}rem` }} />
          <Text fontSize={20} textAlign={'left'} fontWeight={800}>
            협의
          </Text>
          <br />
        </Block>
        <Block>
          <Location style={{ marginRight: `${r[8]}rem` }} />
          <Text
            style={{ marginRight: 'auto' }}
            fontSize={20}
            textAlign={'left'}
            fontWeight={800}
          >
            창천동
          </Text>
          <Tag>소모임</Tag>
          <Tag green>재능공유</Tag>
        </Block>
      </Form>
      <BoldLine />
    </PostFormBlock>
  );
};

export default PostForm;
