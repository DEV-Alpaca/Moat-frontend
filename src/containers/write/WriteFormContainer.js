import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import WriteForm from '../../components/write/WriteForm';
import { changeField, selectType } from '../../modules/write';

const WriteFormContainerBlock = styled.div``;

const typeList = [
  { id: 1, text: '만나요' },
  { id: 2, text: '전화/카톡' },
];

const times = ['30분', '1시간', '1시간 30분', '2시간', '2시간 30분', '3시간'];

const WriteFormContainer = () => {
  const dispatch = useDispatch();
  const { name, club_type, session_time, cost } = useSelector(({ write }) => ({
    name: write.name,
    club_type: write.club_type,
    session_time: write.session_time,
    cost: write.cost,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    dispatch(changeField({ key: name, value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert('글쓰기');
    console.log('WriteFormContainer/onSubmit');
  };

  const [type, setType] = useState(null);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState('30분');

  const onModalClick = () => {
    setModal(!modal);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = (time) => {
    setModal(false);
    setTime(time);
  };

  const onTypeSelect = (type) => {
    setType(type);
    dispatch(selectType({ type }));
  };

  return (
    <WriteFormContainerBlock>
      <WriteForm
        {...{ typeList }}
        {...{ times }}
        {...{ onModalClick }}
        {...{ onCancel }}
        {...{ onConfirm }}
        {...{ modal }}
        {...{ time }}
        {...{ type }}
        {...{ onTypeSelect }}
        {...{ onChange }}
        {...{ onSubmit }}
        {...{ name }}
        {...{ club_type }}
        {...{ session_time }}
        {...{ cost }}
      />
    </WriteFormContainerBlock>
  );
};

export default WriteFormContainer;
