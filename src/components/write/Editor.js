import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const EditorBlock = styled(Form)``;

const StyledForm = styled(Form)`
  margin-top: ${r[16]}rem;
  border-radius: 8px;
  border: 1px solid ${palette.gray[200]};
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 37px;
  outline: none;
  overflow: visible;
  font-size: ${r[20]}rem;
  font-weight: 500;
  color: ${palette.black};
  resize: none;
  padding: 0;
  border: none;
  &:focus {
    color: black;
  }
`;

const Editor = (props) => {
  const {
    type,
    onChange,
    onChangeDescription,
    handleDescription,
    address,
    d_date,
    descriptionType1,
    descriptionType2,
  } = props;
  const [index, setIndex] = useState(null);
  const textareaRef = useRef([]);

  const handleSelectRef = (index) => {
    setIndex(index);
  };
  useEffect(() => {
    if (textareaRef && textareaRef.current[index]) {
      if (index === 2) {
        textareaRef.current[index].style.height = '150px';
      } else {
        textareaRef.current[index].style.height = '37px';
      }
      const scrollHeight = textareaRef.current[index].scrollHeight;
      textareaRef.current[index].style.height = scrollHeight + 'px';
    }
  }, [index, address, d_date, descriptionType1, descriptionType2]);

  useEffect(() => {
    handleDescription(
      type === 1 ? descriptionType1 : type === 2 ? descriptionType2 : '',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, descriptionType1, descriptionType2]);

  return (
    <EditorBlock>
      <StyledForm style={{ padding: `${r[12]}rem ${r[12]}rem` }}>
        {type === 1 ? (
          <>
            <StyledTextarea
              ref={(el) => (textareaRef.current[0] = el)}
              name="address"
              value={address}
              onClick={() => {
                handleSelectRef(0);
              }}
              onFocus={() => {
                handleSelectRef(0);
              }}
              onChange={onChange}
              placeholder="장소(ex. 체육관)"
            />
            <StyledTextarea
              ref={(el) => (textareaRef.current[1] = el)}
              name="d_date"
              value={d_date}
              onClick={() => {
                handleSelectRef(1);
              }}
              onFocus={() => {
                handleSelectRef(1);
              }}
              onChange={onChange}
              placeholder="날짜(ex. 매주 화/수,금/협의/미정)"
            />
            <StyledTextarea
              ref={(el) => (textareaRef.current[2] = el)}
              name="descriptionType1"
              value={descriptionType1}
              onClick={() => {
                handleSelectRef(2);
              }}
              onFocus={() => {
                handleSelectRef(2);
              }}
              onChange={onChangeDescription}
              placeholder="어떤 모임인지 이웃들이 알기 쉽게 적어주세요!"
              style={{ height: '150px' }}
            />
          </>
        ) : type === 2 ? (
          <StyledTextarea
            ref={(el) => (textareaRef.current[2] = el)}
            name="descriptionType2"
            value={descriptionType2}
            onClick={() => {
              handleSelectRef(2);
            }}
            onFocus={() => {
              handleSelectRef(2);
            }}
            onChange={onChangeDescription}
            placeholder=" - 연락이 가능한 시간대를 적어주세요
                - 어떤 걸 나눌 수 있는지, 
                - 나의 경력 혹은 나만의 강점이 뭔지 적어주세요!"
            style={{ height: '150px' }}
          />
        ) : null}
      </StyledForm>
    </EditorBlock>
  );
};

export default Editor;
