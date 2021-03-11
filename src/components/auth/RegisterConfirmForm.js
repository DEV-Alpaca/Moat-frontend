import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import r from '../../lib/styles/Rem';
import Button from '../common/Button';
import Input from '../common/Input';
import Padding from '../common/Padding';
import Text from '../common/Text';
import { ReactComponent as OrangeCheck } from '../../assets/orangeCheck.svg';

const RegisterConfirmFormBlock = styled(Form)`
  padding-top: ${r[28]}rem;
`;

const StyledButton = styled(Button)`
  position: fixed;
  bottom: 0;
  max-width: 36rem;
  width: 100%;
`;
const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCategoryButton = styled(Button)`
  width: 100%;
  padding: ${r[10]}rem ${r[10]}rem;
  background-color: ${palette.white};
  border: 1px solid ${palette.gray[200]};
  color: ${palette.gray[400]};

  ${(props) =>
    props.active &&
    css`
      color: ${palette.orange};
      background: ${palette.orange5};
      border: 2px solid ${palette.orange};
      font-weight: 700;
    `}

  &+& {
    margin-left: ${r[16]}rem;
  }
`;

const categories = ['남', '여'];

const RegisterConfirmForm = ({
  onChange,
  onSubmit,
  onClick,
  birthday,
  error,
  gender,
}) => {
  const [selectCategory, setSelectCategory] = useState('');
  const [check, setCheck] = useState(false);

  const onSelect = (category) => {
    setSelectCategory(category);
  };

  useEffect(() => {
    if (birthday.length === 8 && gender) {
      setCheck(true);
      return;
    }
    setCheck(false);
  }, [birthday, gender]);
  return (
    <>
      <RegisterConfirmFormBlock>
        <Text fontSize={30} fontWeight={700} style={{ lineHeight: '1.4' }}>
          이제 마지막! <br /> 정보를 알려주세요.
        </Text>
        <Padding height={48} />
        {!error && birthday && <Text input>생년월일</Text>}
        <Input
          name="birthday"
          value={birthday}
          onChange={onChange}
          placeholder="생년월일 8자리를 입력해주세요."
        />
        {error && <Text error>생년월일을 올바르게 입력해주세요.</Text>}
        <Padding />
        <CategoryContainer>
          {categories.map((category) => (
            <StyledCategoryButton
              key={category}
              active={selectCategory === category}
              onClick={() => {
                onSelect(category);
                onClick(category);
              }}
            >
              {selectCategory === category ? (
                <OrangeCheck style={{ marginRight: `${r[8]}rem` }} />
              ) : null}
              {category}
            </StyledCategoryButton>
          ))}
        </CategoryContainer>
      </RegisterConfirmFormBlock>
      <StyledButton closed={!check} full to={check ? '/' : null}>
        가입완료
      </StyledButton>
      {/* <StyledButton closed full>
        가입완료
      </StyledButton> */}
    </>
  );
};

export default RegisterConfirmForm;
