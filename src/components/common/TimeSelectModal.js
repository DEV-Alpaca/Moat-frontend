import React from 'react';
import styled from 'styled-components';
import FullScreen from './Fullscreen';
import Button from './Button';
import palette from '../../lib/styles/paletts';

const ModalBlock = styled.div`
  width: 100%;
  background: white;

  border-radius: 8px 8px 8px 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
  button:last-of-type {
    border-radius: 0 0 8px 8px;
    border-bottom: none;
  }
  button:first-child {
    border-radius: 8px 8px 0 0;
  }
`;

const StyledButton = styled(Button)`
  font-weight: 500;
  border-bottom: 1px solid ${palette.gray[100]};
  border-radius: 0;
  font-weight: 500;
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

const TimeSelectModal = ({ times, visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <FullScreen onCancel={onCancel}>
      <ModalBlock>
        {times.map((time) => (
          <StyledButton
            white
            onClick={() => {
              onConfirm(time);
            }}
          >
            {time}
          </StyledButton>
        ))}
      </ModalBlock>
    </FullScreen>
  );
};

export default TimeSelectModal;
