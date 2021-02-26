import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PostViewerSampleImage } from '../../assets/postViewerSampleImage.svg';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Line from '../common/Line';
import Padding from '../common/Padding';
import Tag from '../common/Tag';
import Text from '../common/Text';

const PostViewerBlock = styled.div``;

const ImageBlock = styled.div`
  position: relative;
  width: 100%;
`;

const PostViewerImage = styled(PostViewerSampleImage)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  margin: 0;
  margin: 0;
`;

const StyledTag = styled(Tag)`
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: ${r[16]}rem;
  margin-bottom: ${r[22]}rem;
`;

const PostViewerForm = () => {
  return (
    <PostViewerBlock>
      <ImageBlock>
        <PostViewerImage />
        <StyledTag>전화/카톡</StyledTag>
      </ImageBlock>
      <Form>
        <Padding height={`${r[10]}`} />
        <Text fontSize={26} fontWeight={800}>
          치킨집 창업을 앞두고 있다면... 월매출 1억 사장에게 물어봐요
        </Text>
        <Text fontSize={18} style={{ color: `${palette.gray[300]}` }}>
          ty8271・서대문구
        </Text>
        <Padding height={`${r[10]}`} />
        <Text fontSize={23} fontWeight={800}>
          2,000원 (10분)
        </Text>
        <Padding height={`${r[8]}`} />
      </Form>
      <Line />
    </PostViewerBlock>
  );
};

export default PostViewerForm;
