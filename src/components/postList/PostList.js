import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import PostForm from './PostForm';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Location } from '../../assets/location.svg';

import Text from '../common/Text';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Title from '../common/Title';
import Sample from './mainboard/Sample';
import LocationModal from './location/LocationModal';

const TitleContainer = styled(Form)`
  height: ${r[84]}rem;

  padding: ${r[10]}rem;
  .titleBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StyledLocationButton = styled(Button)`
  width: ${r[160]}rem;
  height: ${r[40]}rem;
  padding: ${r[5]}rem ${r[5]}rem;
  align-items: center;
  font-size: 1rem;
  letter-spacing: -0.4px;

  border-radius: 8px;
  border: solid 1px ${palette.orange};
  background-color: ${palette.white};

  z-index: 9999;
`;

const StyledButton = styled(Button)`
  position: fixed;
  top: 31.17rem;
  right: ${r[16]}rem;
  width: ${r[160]}rem;
`;

const Padding = styled.div`
  margin: 0;
  padding: 0;
  width: ${r[3]}rem;
`;

const PostList = () => {
  const [modal, setModal] = useState(false);
  const [fontColor, setFontColor] = useState(`${palette.black}`);
  const onLocationClick = () => {
    setModal(!modal);
    setFontColor(!modal ? `${palette.orange}` : `${palette.black}`);
  };
  const onCancel = () => {
    setModal(false);
  };
  const onConfirm = () => {
    setModal(false);
  };

  return (
    <>
      <LocationModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
      <Sample />
      <StyledLocationButton
        white
        onClick={onLocationClick}
        style={{ color: `${fontColor}` }}
      >
        지역 변경
      </StyledLocationButton>
      <StyledButton>
        <Plus style={{ marginTop: '2px' }} /> <Padding />
        재능 나누기
      </StyledButton>
      <PostForm closed />
      <PostForm />
      <PostForm />
      <PostForm closed />
    </>
  );
};

export default PostList;
