import React from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Text from '../common/Text';
import { ReactComponent as Call } from '../../assets/call.svg';

const QuestionBlock = styled.div`
  width: 100%;
  height: ${r[196]}rem;
  padding-top: ${r[16]}rem;
  background-color: ${palette.gray[50]};
  text-align: left;
`;

const QuestionContainer = styled.div`
  display: flex;
`;

const StyledCallButton = styled(Button)`
  width: ${r[114]}rem;
  padding: 0;
  align-items: center;
  margin-top: ${r[8]}rem;
`;

const QuestionBox = () => {
  return (
    <QuestionBlock>
      <Form background={`${palette.gray[50]}`}>
        <QuestionContainer>
          <Text
            style={{ textAlign: 'left', marginRight: 'auto' }}
            fontSize={23}
            fontWeight={800}
          >
            모앗에게 궁금한 점이 <br />
            있으신가요?
          </Text>
          <StyledCallButton white>
            <Call style={{ marginTop: '4px' }} />
            문의하기
          </StyledCallButton>
        </QuestionContainer>
      </Form>
    </QuestionBlock>
  );
};

export default QuestionBox;
