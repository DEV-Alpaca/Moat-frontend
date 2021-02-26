import React from 'react';
import styled from 'styled-components';
import FullScreen from './Fullscreen';
import { ReactComponent as Close } from '../../assets/X.svg';
import Button from './Button';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Padding from './Padding';
import locations from '../../lib/location/locations';

const ModalBlock = styled(Form)`
  position: fixed;
  top: 0;
  width: ${r[214]}rem;
  height: 100%;
  background: white;

  border-radius: 0 8px 8px 0;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
`;

const StyledButton = styled(Button)`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  text-align: left;
  font-size: 30px;
  font-weight: 800;
  :hover {
    color: ${palette.orange};
  }
  :active {
    color: ${palette.orange};
  }
`;

const HeaderModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <ModalBlock>
        <Close onClick={onCancel} style={{ cursor: 'pointer' }} />
        <Padding height={`${r[60]}`} />

        {locations.seoul[0]}

        <StyledButton onClick={onConfirm} white>
          동네모앗
        </StyledButton>
        <Padding />
        <StyledButton onClick={onConfirm} white>
          마이페이지
        </StyledButton>
        <Padding />
        <StyledButton onClick={onConfirm} white>
          문의하기
        </StyledButton>
      </ModalBlock>
    </FullScreen>
  );
};

export default HeaderModal;
