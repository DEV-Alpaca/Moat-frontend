import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Text from '../common/Text';
import { ReactComponent as Kakao } from '../../assets/kakao.svg';
import Padding from '../common/Padding';

const QuestionBlock = styled(Form)`
  height: ${r[228]}rem;
  background-color: ${palette.gray[50]};
  text-align: left;
`;

const QuestionContainer = styled.div`
  display: flex;
`;

const StyledCallButton = styled(Button)`
  width: ${r[142]}rem;
  height: ${r[60]}rem;
  padding: 0;
  align-items: center;
  font-weight: 700;
  font-size: 21px;
  border: 1px solid ${palette.orange};
`;

const QuestionBox = () => {
  return (
    <QuestionBlock>
      <Padding />
      <QuestionContainer>
        <Text style={{ marginRight: 'auto' }} fontSize={20} fontWeight={800}>
          궁금하거나 <br />
          어려운 점이 있나요?
        </Text>
        <StyledCallButton white>
          <Kakao style={{ marginTop: '4px', marginRight: '4px' }} />
          물어보기!
        </StyledCallButton>
      </QuestionContainer>
    </QuestionBlock>
  );
};

export default QuestionBox;
