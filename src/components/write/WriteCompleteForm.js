import React, { useEffect } from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Button from '../common/Button';
import Padding from '../common/Padding';
import Text from '../common/Text';
import { ReactComponent as Warning } from '../../assets/redalert.svg';
import { ReactComponent as Chkakao } from '../../assets/Chkakao.svg';
import r from '../../lib/styles/Rem';
import { Link } from 'react-router-dom';

const WriteCompleteFormBlock = styled(Form)``;

const Block = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 8px;
  background: ${palette.orange5};
`;

const RedContainer = styled.div`
  padding: 0;
  display: flex;
  border-radius: 4px;
  /* background: ${palette.orange5}; */
  background-color: inherit;
`;

const StyledWarning = styled(Warning)`
  margin-top: 3px;
  margin-right: ${r[8]}rem;
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledA = styled.a`
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

const StyeldButton = styled(Button)`
  width: ${r[300]}rem;
  bottom: ${r[32]}rem;
`;

const Img = styled.img`
  box-sizing: border-box;
  width: 273px;
  height: 223px;
  z-index: 0;
`;

const WriteCompleteForm = () => {
  useEffect(() => {}, []);

  return (
    <WriteCompleteFormBlock>
      <Text fontSize={30} textAlign="center">
        카카오톡 채널을 추가하면
        <br /> 신청이 완료됩니다.
      </Text>
      <Padding height={24} />
      <Block>
        <RedContainer>
          <div>
            <StyledWarning style={{ marginTop: `${r[10]}rem` }} />
          </div>
          <Flex>
            <Text red fontSize={20} fontWeight={700}>
              신청시 반드시 카카오톡 채널을 <br /> 추가
              <span style={{ color: 'black' }}>해주세요.</span>
            </Text>
            <Padding height={8} />
            <Text>채널을 통해 안내 연락을 드립니다. </Text>
          </Flex>
        </RedContainer>
        <Img src={process.env.PUBLIC_URL + 'MoatCS.png'} alt="안내서" />
        <StyledA
          rel="noopener noreferrer"
          onClick="location.href='intent://http://pf.kakao.com/_kfNLK#Intent;scheme=http;package=com.android.chrome;end'"
          target="_blank"
        >
          <StyeldButton>
            <Chkakao style={{ marginRight: `${r[6]}rem` }} />
            카카오톡 채널 추가하기
          </StyeldButton>
        </StyledA>
      </Block>
    </WriteCompleteFormBlock>
  );
};

export default WriteCompleteForm;
