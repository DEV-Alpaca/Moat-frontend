import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Editor from '../../components/write/Editor';
import { changeField } from '../../modules/write';

const EditorContainerBlock = styled.div``;

const EditorContainer = () => {
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

  return (
    <EditorContainerBlock>
      {club_type && (
        <Editor
          type={club_type}
          onChange={onChange}
          {...{ address }}
          {...{ d_date }}
          {...{ description }}
        />
      )}
    </EditorContainerBlock>
  );
};

export default EditorContainer;
