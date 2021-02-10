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
        <Text fontSize={23} textAlign={'left'} fontWeight={500}>
          현직 목수입니다. 자신만의 가구 만들 분, 만 원에 가르쳐드려요
        </Text>
      </Form>
      <Line />
      <Form>
        <Block>
          <Schedule style={{ marginRight: `${r[8]}rem` }} />
          <Text fontSize={20} textAlign={'left'} fontWeight={500}>
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
            fontWeight={500}
          >
            창천동
          </Text>
          <div>소모임</div>
        </Block>
      </Form>
      <BoldLine />
    </PostFormBlock>
  );
};

export default PostForm;
