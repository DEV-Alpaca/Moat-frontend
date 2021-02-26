import React from 'react';
import styled from 'styled-components';
import FullScreen from './Fullscreen';
import { ReactComponent as Close } from '../../assets/X.svg';
import Button from './Button';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import Line from './Line';

const ModalBlock = styled.div`
  width: ${r[214]}rem;
  background: white;

  border-radius: 8px 8px 8px 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  button:last-of-type {
    border-radius: 8px 8px 8px 8px;
    border-bottom: none;
  }
  button:first-child {
    border-radius: 8px 8px 8px 8px;
  }
`;

const StyledButton = styled(Button)`
  font-weight: 500;
  border: none;
  border-radius: 0;
  /* border-bottom: 1px solid ${palette.gray[100]}; */
  :hover {
    background: ${palette.orange5};
    color: ${palette.orange};
    font-weight: 700;
    line-height: 1.4;
  }
  :active {
    color: ${palette.orange};
  }
`;

const HeaderModal = ({ locations, visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <ModalBlock>
        {locations.map((location, i) => (
          <>
            <StyledButton
              key={i}
              white
              onClick={() => {
                onConfirm(location);
              }}
            >
              서울 {location}
            </StyledButton>
          </>
        ))}
      </ModalBlock>
    </FullScreen>
  );
};

export default HeaderModal;
