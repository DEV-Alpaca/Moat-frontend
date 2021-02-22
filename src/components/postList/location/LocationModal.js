import styled from 'styled-components';
import location from '../../../lib/location/location';
import Form from '../../../lib/styles/Form';
import palette from '../../../lib/styles/paletts';
import r from '../../../lib/styles/Rem';
import Button from '../../common/Button';
import FullScreen from '../../common/Fullscreen';
import Line from '../../common/Line';
import Text from '../../common/Text';

const Block = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  box-sizing: border-box;
  background: white;

  /* width: ${r[227]}rem; */

  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);

  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  height: auto;
  text-align: left;
  font-size: 20px;
  font-weight: 800;
  :hover {
    color: ${palette.orange};
  }
  :active {
    color: ${palette.orange};
  }
`;

const LocationModal = ({ visible, onConfirm, onCancel }) => {
  if (!visible) return null;
  return (
    <FullScreen>
      <Block>
        <ModalBlock>
          <StyledButton onClick={onConfirm} white>
            {location.seoul[0]}&{location.seoul[1]}
          </StyledButton>
          <Line />
          <StyledButton onClick={onConfirm} white>
            {location.seoul[2]}
          </StyledButton>
          <Line />
          <Text gray>
            다른 지역은 <br />
            서비스 준비중입니다
          </Text>
        </ModalBlock>
      </Block>
    </FullScreen>
  );
};

export default LocationModal;
