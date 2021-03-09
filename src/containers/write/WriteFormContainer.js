import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import WriteForm from '../../components/write/WriteForm';

const WriteFormContainerBlock = styled.div``;

const clubType = [
  { id: 1, text: '만나요' },
  { id: 2, text: '전화/카톡' },
];

const times = ['30분', '1시간', '1시간 30분', '2시간', '2시간 30분', '3시간'];

const WriteFormContainer = ({ district }) => {
  const [type, setType] = useState(null);
  const [modal, setModal] = useState(false);
  const [time, setTime] = useState('30분');
  const [imgUrls, setImgUrls] = useState([{ id: '', fileUrl: '' }]);
  const MAX = 3;

  const nextId = useRef(1);
  const onInsert = (e) => {
    if (imgUrls.length > MAX) {
      alert('사진은 3개 까지만 업로드 가능합니다.');
      return;
    }

    const fileArr = e.target.files;

    let fileUrls = [];

    let file;
    let filesLength = fileArr.length;

    for (let i = 0; i < filesLength; i++) {
      file = fileArr[i];

      let reader = new FileReader();
      reader.onload = () => {
        fileUrls[i] = reader.result;
        const image = {
          id: nextId.current,
          fileUrl: fileUrls[i],
        };

        console.log('for in image i nextId.current ', image, i, nextId.current);

        setImgUrls(imgUrls.concat(image));
        nextId.current += 1;
      };
      reader.readAsDataURL(file);
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

  const onRemove = (id) => {
    console.log('onRemove', imgUrls, id);
    setImgUrls(imgUrls.filter((img) => img.id !== id));
  };

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
        {...{ onInsert }}
        {...{ onRemove }}
      />
    </WriteFormContainerBlock>
  );
};

export default WriteFormContainer;
