import React, { useState } from 'react';
import styled from 'styled-components';
import WriteForm from '../../components/write/WriteForm';

const WriteFormContainerBlock = styled.div``;

const clubType = [
  { id: 1, text: '만나요' },
  { id: 2, text: '전화/카톡' },
];

const times = ['30분', '1시간', '1시간 30분', '2시간', '2시간 30분', '3시간'];

const WriteFormContainer = () => {
  const [type, setType] = useState(0);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState('30분');
  const [imgUrls, setImgUrls] = useState(['']);
  const MAX = 3;

  const handleImageUpload = (e) => {
    console.log('before', imgUrls.length);
    if (imgUrls.length > MAX) {
      alert('사진은 3개 까지만 업로드 가능합니다.');
      return;
    }

    const fileArr = e.target.files;

    let fileUrls = [];

    let file;
    let filesLength =
      imgUrls.length + fileArr.length > 4 ? MAX : fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileUrls[i] = reader.result;
        setImgUrls([...imgUrls, ...fileUrls]);
      };
      reader.readAsDataURL(file);
      console.log('after', imgUrls.length);
    }
  };

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
  };

  const onRemove = (id) => {};

  return (
    <WriteFormContainerBlock>
      <WriteForm
        {...{ clubType }}
        {...{ times }}
        {...{ onModalClick }}
        {...{ onCancel }}
        {...{ onConfirm }}
        {...{ modal }}
        {...{ time }}
        {...{ type }}
        {...{ onTypeSelect }}
        {...{ imgUrls }}
        {...{ handleImageUpload }}
      />
    </WriteFormContainerBlock>
  );
};

export default WriteFormContainer;
