import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';

const EditorBlock = styled.div``;

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
  color: ${palette.black};
  resize: none;

  &:focus {
    color: black;
  }
`;

const Editor = ({ type, onChange }) => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue] = useState(''); // you can manage data with it

  useEffect(() => {
    textareaRef.current.style.height = '0px';
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + 'px';
  }, [currentValue]);

  return (
    <EditorBlock>
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
      </StyledForm>
      <StyledTextarea style={{ display: 'none' }} ref={textareaRef} />
    </EditorBlock>
  );
};

export default Editor;
