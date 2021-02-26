import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Text from '../common/Text';

import { ReactComponent as Call } from '../../assets/call.svg';
import { ReactComponent as PostViewerSampleImage } from '../../assets/postViewerSampleImage.svg';
import Padding from '../common/Padding';

const PostViewerIntroduceBlock = styled(Form)``;

const Block = styled(Form)`
  border-radius: 8px;
  padding: ${r[16]}rem ${r[16]}rem;
  background: ${palette.orange5};
`;

const CallBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCall = styled(Call)`
  width: ${r[16]}rem;
  height: ${r[16]}rem;
  margin-right: ${r[5]}rem;
`;

const PostViewerImage = styled(PostViewerSampleImage)`
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
  height: 100%;
  margin: 0;
`;

const EmoticonBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${r[40]}rem ${r[40]}rem;
`;

const EmoticonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostViewerIntroduce = () => {
  return (
    <PostViewerIntroduceBlock>
      <Text fontSize={26} fontWeight={800}>
        소개
      </Text>
      <Block>
        <CallBlock>
          <StyledCall />
          <Text fontSize={20} fontWeight={500}>
            <span style={{ color: 'orange' }}> 전화/카톡 </span>으로 진행합니다.
          </Text>
        </CallBlock>
        <Text fontSize={16}>구체적인 날짜/시간은 베테랑과 협의해주세요!</Text>
      </Block>
      <Padding />
      <PostViewerImage />
      <Padding />
      <Text fontWeight={500}>
        프랜차이즈 치킨집을 2번 창업했다가 동네 치킨으로 전환, 월매출 1억을
        달성한 사장입니다. ^^* 치킨집 운영에 관심있으신 분들, 요즘 배달 수수료는
        어떤지~ 닭 처음 튀겨보던 때로 돌아가서 질문 다~ 받아드립니다. ^^
      </Text>
      <EmoticonBlock>
        <EmoticonContainer>
          <Call style={{ width: '56px', height: '56px' }} />
          <Text gray>멋져요</Text>
          <Text>1</Text>
        </EmoticonContainer>
        <EmoticonContainer>
          <Call style={{ width: '56px', height: '56px' }} />
          <Text gray>재밌어요</Text>
          <Text>0</Text>
        </EmoticonContainer>
        <EmoticonContainer>
          <Call style={{ width: '56px', height: '56px' }} />
          <Text gray>응원해요</Text>
          <Text>0</Text>
        </EmoticonContainer>
      </EmoticonBlock>
    </PostViewerIntroduceBlock>
  );
};

export default PostViewerIntroduce;
