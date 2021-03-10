import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Editor from '../../components/write/Editor';
import { changeField, inputText } from '../../modules/write';

const EditorContainerBlock = styled.div``;

const EditorContainer = () => {
  const [descriptions, setDescriptions] = useState({
    descriptionType1: '',
    descriptionType2: '',
  });

  const dispatch = useDispatch();
  const { club_type, address, d_date } = useSelector(({ write }) => ({
    club_type: write.club_type,
    address: write.address,
    d_date: write.d_date,
  }));

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

  const handleDescription = (text) => {
    dispatch(inputText({ text }));
  };

  return (
    <EditorContainerBlock>
      {club_type && (
        <Editor
          type={club_type}
          onChange={onChange}
          onChangeDescription={onChangeDescription}
          handleDescription={handleDescription}
          {...{ address }}
          {...{ d_date }}
          {...descriptions}
        />
      )}
    </EditorContainerBlock>
  );
};

export default EditorContainer;
