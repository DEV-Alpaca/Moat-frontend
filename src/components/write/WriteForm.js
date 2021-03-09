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
    typeList,
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
    cost,
  } = props;

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
          {typeList.map((club, i) => (
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
            <Padding height={24} />
            <Text gray>설명을 입력해주세요.</Text>
            <Padding height={8} />
          </>
        )}
      </>
    </>
  );
};

export default WriteForm;
