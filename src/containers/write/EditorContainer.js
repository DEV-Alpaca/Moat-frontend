import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Editor from '../../components/write/Editor';
import { changeField, inputText, selectType } from '../../modules/write';

const EditorContainerBlock = styled.div``;

const EditorContainer = () => {
  const [descriptions, setDescriptions] = useState({
    descriptionType1: '',
    descriptionType2: '',
  });

  const dispatch = useDispatch();
  const { club_type, address, d_date, description } = useSelector(
    ({ write }) => ({
      club_type: write.club_type,
      address: write.address,
      description: write.description,
      d_date: write.d_date,
    }),
  );

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onChangeDescription = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    setDescriptions({
      ...descriptions,
      [name]: value,
    });
  };

  // useEffect(() => {
  //   dispatch(inputText({ ...descriptions.descriptionType2 }));
  // }, [descriptions, dispatch]);
  return (
    <EditorContainerBlock>
      <button
        onClick={() => {
          dispatch(inputText({...descriptions.descriptionType1}));
          console.log(descriptions);
        }}
      >
        버튼
      </button>

      {club_type && (
        <Editor
          type={club_type}
          onChange={onChange}
          onChangeDescription={onChangeDescription}
          {...{ address }}
          {...{ d_date }}
          {...descriptions}
        />
      )}
    </EditorContainerBlock>
  );
};

export default EditorContainer;
