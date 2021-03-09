import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import r from '../../lib/styles/Rem';

import { ReactComponent as OrangeCheck } from '../../assets/orangeCheck.svg';
import { ReactComponent as DownArrow } from '../../assets/downArrow.svg';

import Text from '../common/Text';
import Button from '../common/Button';
import palette from '../../lib/styles/paletts';
import Input from '../common/Input';
import Padding from '../common/Padding';
import TimeSelectModal from '../common/TimeSelectModal';

const StyledInput = styled(Input)`
  width: 98%;
  height: ${r[52]}rem;
`;

const StyledForm = styled(Form)`
  margin-top: ${r[16]}rem;
  border-radius: 8px;
  border: 1px solid ${palette.gray[200]};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  overflow: visible;
  font-size: ${r[20]}rem;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: -0.7px;
  color: ${palette.black};
  resize: none;

  &:focus {
    color: black;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button + button {
    margin-left: ${r[16]}rem;
  }
  button + div {
    margin-left: ${r[16]}rem;
  }
`;

const StyledDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 0 ${r[12]}rem;
  width: ${r[228]}rem;
  border: solid 1px ${palette.gray[200]};
  outline: none;

  &:hover {
    border-color: ${palette.orange};
  }
`;

const StyledButton = styled(Button)`
  width: ${r[150]}rem;
  height: ${r[52]}rem;
  padding: ${r[12]}rem ${r[12]}rem;
  justify-content: space-between;
`;

const StyledPriceInput = styled.input`
  height: ${r[52]}rem;
  width: 80%;
  font-size: ${r[20]}rem;
  border: none;
  outline: none;
`;

const WriteForm = (props) => {
  const {
    clubType,
    times,
    modal,
    time,
    type,
    onModalClick,
    onCancel,
    onConfirm,
    onTypeSelect,
    onChange,
    onSubmit,
    name,
    d_date,
    cost,
    address,
    description,
  } = props;

  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(''); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [currentValue]);

  return (
    <>
      <TimeSelectModal
        times={times}
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />

      <>
        <StyledInput name="name" placeholder="제목을 한줄로 적어주세요" />
        <Padding height={40} />
        <Text gray>어떤 방식인가요?</Text>
        <Padding height={8} />
        <Container>
          {clubType.map((club, i) => (
            <Button
              key={i + 1}
              white
              active={club.id === type}
              onClick={() => {
                onTypeSelect(i + 1);
              }}
            >
              {club.id === type ? (
                <OrangeCheck style={{ marginRight: `${r[8]}rem` }} />
              ) : null}
              {club.text}
            </Button>
          ))}
        </Container>
        {type && (
          <>
            <Padding height={40} />
            <Text gray>
              시간
              {type === 1 ? '당 ' : type === 2 ? '과 ' : null}
              가격을 알려주세요.
            </Text>
            <Padding height={8} />
            {type === 1 ? (
              <Container>
                <StyledButton white onClick={onModalClick}>
                  <Text fontSize={20}> {time}</Text>
                  <DownArrow style={{ marginLeft: `${r[4]}rem` }} />
                </StyledButton>
                <StyledDiv style={{ width: `${r[160]}rem` }}>
                  <StyledPriceInput name="cost" />
                  <Text style={{ color: `${palette.gray[200]}` }}>원</Text>
                </StyledDiv>
              </Container>
            ) : type === 2 ? (
              <Container>
                <Text fontWeight={700} fontSize={20}>
                  10분 당
                </Text>
                <StyledDiv>
                  <StyledPriceInput name="cost" />
                  <Text style={{ color: `${palette.gray[200]}` }}>원</Text>
                </StyledDiv>
              </Container>
            ) : null}
            <Text
              gray
              style={{
                marginTop: `${r[24]}rem`,
              }}
            >
              설명을 입력해주세요.
            </Text>
            <Padding height={8} />
            <StyledForm style={{ padding: `${r[12]}rem ${r[12]}rem` }}>
              {type === 1 ? (
                <>
                  <StyledTextarea
                    ref={textareaRef}
                    name="address"
                    value={currentValue}
                    onChange={onChange}
                    placeholder="장소(ex. 체육관)"
                    rows=""
                  />
                  <StyledTextarea
                    ref={textareaRef}
                    name="d_date"
                    value={currentValue}
                    onChange={onChange}
                    placeholder="날짜(ex. 매주 화/수,금/협의/미정)"
                    rows=""
                  />
                  <StyledTextarea
                    ref={textareaRef}
                    name="description"
                    value={currentValue}
                    onChange={onChange}
                    placeholder="어떤 모임인지 이웃들이 알기 쉽게 적어주세요!"
                    rows="8"
                  />
                </>
              ) : type === 2 ? (
                <StyledTextarea
                  ref={textareaRef}
                  name="description"
                  value={currentValue}
                  onChange={onChange}
                  placeholder=" - 연락이 가능한 시간대를 적어주세요
                - 어떤 걸 나눌 수 있는지, 
                - 나의 경력 혹은 나만의 강점이 뭔지 적어주세요!"
                  rows="8"
                />
              ) : null}
            </StyledForm>{' '}
          </>
        )}

        <StyledTextarea style={{ display: 'none' }} ref={textareaRef} />
        <Padding height={20} />
      </>
    </>
  );
};

export default WriteForm;
