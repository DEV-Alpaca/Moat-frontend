import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import { ReactComponent as Camera } from '../../assets/camera.svg';
import { ReactComponent as WhiteClose } from '../../assets/WhiteClose.svg';
import Text from '../common/Text';
import Form from '../../lib/styles/Form';
import Padding from '../common/Padding';

const Block = styled.div;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: flex-end;
  overflow: auto;
  label + img {
    margin-left: ${r[16]}rem;
  }

  img + img {
    margin-left: ${r[16]}rem;
  }
`;
const CameraBlock = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: ${r[70]}rem;
  height: ${r[70]}rem;
  padding: 15px 11px 7px 12px;
  border-radius: 8px;
  border: solid 1px ${palette.gray[100]};
  background-color: ${palette.gray[50]};
  letter-spacing: -0.7px;
  color: #808080;

  cursor: pointer;
`;

const ImBlock = styled.div`
  position: relative;
`;

const StyledImg = styled.img`
  width: ${r[88]}rem;
  height: ${r[88]}rem;
  border-radius: 8px;
`;

const CloseBox = styled(Button)`
  width: ${r[32]}rem;
  height: ${r[32]}rem;
  position: absolute;
  top: 0;
  right: 0;
  background: ${palette.black};
`;

const UploadPictureForm = ({ onInsert, imgUrls, onRemove }) => {
  return (
    <div style={{ padding: `${r[16]}rem` }}>
      <Text gray>설명을 입력해주세요.</Text>
      <Padding height={8} />
      <ImgContainer>
        <CameraBlock>
          <Camera />
          <Text fontWeight={400}>사진추가</Text>
          <input
            style={{ display: 'none' }}
            type="file"
            multiple
            accept="image/jpg,image/png,image/jpeg,image/gif"
            onChange={onInsert}
          />
        </CameraBlock>
        {imgUrls.map((imgUrl, i) => (
          <>
            {i === 0 ? null : (
              <ImBlock key={i + 1}>
                <StyledImg key={i + 1} src={imgUrl.fileUrl} />
                <CloseBox key={i + 1} onClick={() => onRemove(imgUrl.id)}>
                  <WhiteClose key={i + 1} />
                </CloseBox>
              </ImBlock>
            )}
          </>
        ))}
      </ImgContainer>
    </div>
  );
};

export default UploadPictureForm;
