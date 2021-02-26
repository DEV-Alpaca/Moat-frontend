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
import Pagination from './Pagination';

const PostFormBlock = styled.div``;

const Image = styled(Sample)`
  width: 100%;
  height: 15rem;
  object-fit: contain;
  border-radius: 8px;
`;

const PostViewerImage = styled.img`
  box-sizing: border-box;
  width: 100%;
  height: 270px;
  margin: 0;
`;

const Block = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const PostForm = ({ postViewer = false }) => {
  return (
    <>
      <PostFormBlock>
        {postViewer && (
          <PostViewerImage
            src="http://placehold.it/320x100?text=sample"
            alt="postViewerImage"
          />
        )}
        <Form>
          {!postViewer && <Image />}
          <Text fontSize={23} textAlign={'left'} fontWeight={500}>
            잠실 재개발위원회 소속입니다. 부동산 궁금한 점 물어보세요
          </Text>
        </Form>

        <BoldLine />
      </PostFormBlock>
    </>
  );
};

export default PostForm;
