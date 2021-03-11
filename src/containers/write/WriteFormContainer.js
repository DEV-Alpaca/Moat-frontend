import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import WriteForm from '../../components/write/WriteForm';
import {
  changeField,
  initializeForm,
  selectSessionTime,
  selectType,
} from '../../modules/write';

const WriteFormContainerBlock = styled.div``;

const typeList = [
  { id: 1, text: '만나요' },
  { id: 2, text: '전화/카톡' },
];

const timeList = [
  { id: 1, text: '30분', value: 30 },
  { id: 2, text: '1시간', value: 60 },
  { id: 3, text: '1시간 30분', value: 90 },
  { id: 4, text: '2시간', value: 120 },
  { id: 5, text: '2시간 30분', value: 150 },
  { id: 6, text: '3시간', value: 180 },
];

const WriteFormContainer = () => {
  const dispatch = useDispatch();
  const { name, club_type, cost } = useSelector(({ write }) => ({
    name: write.name,
    club_type: write.club_type,
    cost: write.cost,
  }));

  const [type, setType] = useState(null);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState('30분');

  const onChange = (e) => {
    const { value, name } = e.target;
    console.log(name, value);
    if (name === 'cost ') {
      dispatch(changeField({ key: name, value: parseInt(value) }));
    }
    dispatch(changeField({ key: name, value }));
  };

  const onModalClick = () => {
    setModal(!modal);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = (text, value) => {
    setModal(false);
    setTime(text);
    console.log(text);
    dispatch(selectSessionTime({ time: value }));
  };

  const onTypeSelect = (type) => {
    setType(type);
    dispatch(selectType({ type }));
  };

  useEffect(() => {
    return dispatch(initializeForm());
  }, [dispatch]);

  return (
    <WriteFormContainerBlock>
      <WriteForm
        {...{ typeList }}
        {...{ timeList }}
        {...{ onModalClick }}
        {...{ onCancel }}
        {...{ onConfirm }}
        {...{ modal }}
        {...{ time }}
        {...{ type }}
        {...{ onTypeSelect }}
        {...{ onChange }}
        {...{ name }}
        {...{ club_type }}
        {...{ cost }}
      />
    </WriteFormContainerBlock>
  );
};

export default WriteFormContainer;
