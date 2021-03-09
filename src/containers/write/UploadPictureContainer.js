import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import UploadPictureForm from '../../components/write/UploadPictureForm';

const UploadPictureContainerBlock = styled.div``;

const UploadPictureContainer = () => {
  const dispatch = useDispatch();
  const { club_type } = useSelector(({ write }) => ({
    club_type: write.club_type,
  }));

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

  const onRemove = (id) => {
    console.log('onRemove', imgUrls, id);
    setImgUrls(imgUrls.filter((img) => img.id !== id));
  };
  return (
    <UploadPictureContainerBlock>
      {club_type && (
        <UploadPictureForm
          {...{ imgUrls }}
          {...{ onInsert }}
          {...{ onRemove }}
        />
      )}
    </UploadPictureContainerBlock>
  );
};

export default UploadPictureContainer;
