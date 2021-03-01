import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Line from '../common/Line';
import Padding from '../common/Padding';
import Text from '../common/Text';

import { ReactComponent as Warning } from '../../assets/warning.svg';
import { ReactComponent as Check } from '../../assets/check.svg';
import Button from '../common/Button';

const WarningFormBlock = styled(Form)``;

const SubTitle = styled(Text)`
  padding: 0;
  font-size: ${r[23]}rem;
  text-align: left;
  font-weight: 800;
`;

const WaringText = styled.p`
  margin: 0;
  padding: 0;
  line-height: 1.6;
  letter-spacing: -0.7px;
`;

const RedContainer = styled(Form)`
  padding: 0;
  display: flex;
  color: red;
  font-weight: 500;
`;

const StyledWarning = styled(Warning)`
  margin-top: 3px;
  margin-right: ${r[11]}rem;
`;

const CheckBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  /* padding: 0 ${r[10]}rem; */
  cursor: pointer;
`;

const StyledNotCheck = styled.div`
  width: ${r[20]}rem;
  height: ${r[20]}rem;
  border-radius: 2px;
  border: 1px solid ${palette.gray[200]};
  margin-right: ${r[7]}rem;
`;

const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${r[22]}rem;
  height: ${r[22]}rem;
  border-radius: 2px;
  background: orange;
  margin-right: ${r[7]}rem;
`;

const WarningForm = () => {
  const [checked, setChecked] = useState(false);
  const handleChecked = (e) => {
    console.log('클릭중');
    setChecked(!checked);
  };

  return (
    <WarningFormBlock>
      <Text
        style={{
          fontSize: `${r[26]}rem`,
          textAlign: 'left',
          fontWeight: '800',
        }}
      >
        주의사항
      </Text>
      <Padding />
      <Padding />
      <SubTitle>1. 모앗 글은 누가 쓸 수 있나요</SubTitle>
      <Padding />
      <Line orange />
      <Padding />
      <WaringText>
        나눌 수 있는 재능이 있는 <b className="Bold">중장년층</b>이라면 자유롭게
        글을 쓸 수 있어요.
      </WaringText>
      <Padding />
      <Text
        style={{
          textAlign: 'left',
          fontWeight: '500',
        }}
      >
        어떤게 재능이 될 수 있나요?
      </Text>
      <Padding />
      <Padding />
      <SubTitle>2. 이런 글은 삭제될 수 있어요</SubTitle>
      <Padding />
      <Line orange />
      <Padding />
      <WaringText>
        • 중장년층이 작성한 글이 아닌 것으로 확인될 경우 (가입시 입력한 생년월일
        기준)
      </WaringText>
      <WaringText>• 모앗이 정한 재능공유 기준에 미달될 경우</WaringText>
      <WaringText>• 성희롱/혐오 표현이 발견될 경우</WaringText>
      <WaringText>• 참여자의 개인정보를 요구할 경우</WaringText>
      <Padding />
      <RedContainer>
        <div>
          <StyledWarning />
        </div>
        <WaringText>
          상기 안내한 가이드라인에 어긋나는 글은 무통보 삭제될 수 있습니다.
        </WaringText>
      </RedContainer>
      <Padding height={`${r[24]}`} />
      <CheckBox onClick={handleChecked}>
        {!checked && <StyledNotCheck />}

        {checked && (
          <StyledCheckBox>
            <Check />
          </StyledCheckBox>
        )}
        {/* {checked && <StyledCheck />} */}
        <Text
          style={{
            textAlign: 'left',
            fontWeight: '500',
          }}
        >
          모든 주의사항을 읽고, 확인하였습니다.
        </Text>
      </CheckBox>
      <Padding height={`${r[24]}`} />
      <Button>작성하기</Button>
    </WarningFormBlock>
  );
};

export default WarningForm;
