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

const defaultStyle = {
  border: 'none',
};

const Editor = ({
  style = defaultStyle,
  type,
  onChange,
  address,
  d_date,
  description,
}) => {
  const [selectRef, setSelectRef] = useState('');

  const addressRef = useRef(null);
  const d_dateRef = useRef(null);
  const descriptionReft = useRef(null);

  useEffect(() => {
    if (selectRef && selectRef.current) {
      selectRef.current.style.height = '0px';
      const scrollHeight = selectRef.current.scrollHeight;
      selectRef.current.style.height = scrollHeight + 'px';
      console.log('높이는 ', selectRef.current.style.height, scrollHeight);
    } else {
      console.log('존재 x');
    }
  }, [selectRef]);

  const handleSelectRef = (e) => {
    setSelectRef(e.target.name);
  };
  console.log(selectRef);
  return (
    <EditorBlock>
      <StyledForm style={{ padding: `${r[12]}rem ${r[12]}rem` }}>
        {type === 1 ? (
          <>
            <StyledTextarea
              style={style}
              ref={addressRef}
              name="address"
              value={address}
              onClick={handleSelectRef}
              onChange={onChange}
              placeholder="장소(ex. 체육관)"
              rows=""
            />
            <StyledTextarea
              style={style}
              ref={d_dateRef}
              name="d_date"
              value={d_date}
              onClick={handleSelectRef}
              onChange={onChange}
              placeholder="날짜(ex. 매주 화/수,금/협의/미정)"
              rows=""
            />
            <StyledTextarea
              style={style}
              ref={descriptionReft}
              name="description"
              value={description}
              onClick={handleSelectRef}
              onChange={onChange}
              placeholder="어떤 모임인지 이웃들이 알기 쉽게 적어주세요!"
              rows=""
            />
          </>
        ) : type === 2 ? (
          <StyledTextarea
            style={style}
            ref={descriptionReft}
            name="description"
            value={description}
            onClick={handleSelectRef}
            onChange={onChange}
            placeholder=" - 연락이 가능한 시간대를 적어주세요
                - 어떤 걸 나눌 수 있는지, 
                - 나의 경력 혹은 나만의 강점이 뭔지 적어주세요!"
            rows=""
          />
        ) : null}
      </StyledForm>
    </EditorBlock>
  );
};

export default Editor;
