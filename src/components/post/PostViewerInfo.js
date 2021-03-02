import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Line from '../common/Line';
import Padding from '../common/Padding';
import Text from '../common/Text';

const PostViewerInfoBlock = styled(Form)``;

const PostViewerInfoContainer = styled.div`
  line-height: 1.4;
  letter-spacing: -0.5px;
`;

const Flex = styled(Form)`
  display: flex;
`;

const Dot = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${r[16]}rem;
  width: 4px;
  height: 4px;

  /* font-size: ${r[36]}rem; */
  background: ${palette.orange};
  margin-right: ${r[16]}rem;
`;

const PostViewerInfo = () => {
  return (
    <>
      <PostViewerInfoBlock>
        <Text fontSize={23} fontWeight={700}>
          모앗에서 알려드려요
        </Text>
      </PostViewerInfoBlock>
      <Flex>
        <Dot></Dot>
        <PostViewerInfoContainer>
          <Text fontSize={20} fontWeight={700}>
            <span style={{ color: `${palette.orange}` }}> 신청하기 </span>를
            통해 카카오톡 플러스 친구로 연결됩니다.
          </Text>
          <Padding height={`${r[8]}`} />
          <Text gray fontSize={16} style={{ color: `${palette.gray[300]}` }}>
            <span>계좌 입금 정보 </span>
            등이 안내되니, 반드시 플러스 친구와 대화를 진행해주세요.
          </Text>
        </PostViewerInfoContainer>
      </Flex>
      <Line />
      <Flex>
        <Dot></Dot>
        <PostViewerInfoContainer>
          <Text fontSize={20} fontWeight={700}>
            성희롱/개인정보 요구를 금지합니다.
          </Text>
          <Padding height={`${r[8]}`} />
          <Text gray fontSize={16} style={{ color: `${palette.gray[300]}` }}>
            추후 문제 적발 시, 중단 조치가 이루어지며 관련 법률에 따라{' '}
            <span style={{ color: `${palette.gray[400]}` }}>
              처벌을 받을 수 있습니다.
            </span>
          </Text>
        </PostViewerInfoContainer>
      </Flex>
      <Line />
    </>
  );
};

export default PostViewerInfo;
