import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';
import PostForm from './PostForm';
import { ReactComponent as Plus } from '../../assets/Plus.svg';
import { ReactComponent as OrangeCheck } from '../../assets/orangeCheck.svg';

import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';
import MainboardSlider from './mainboard/MainboardSlider';

const CategoryContainer = styled(Form)`
  display: flex;
  align-items: center;
  padding-bottom: 0px;
`;

const StyledCategoryButton = styled(Button)`
  width: auto;
  padding: ${r[10]}rem ${r[10]}rem;

  font-size: ${r[20]}rem;
  letter-spacing: -0.4px;

  border-radius: 8px;
  border: none;
  background-color: ${palette.gray[50]};
  color: ${palette.gray[400]};
  margin-right: ${r[8]}rem;
  &:hover {
    font-weight: 700;
  }
  ${(props) =>
    props.active &&
    css`
      color: ${palette.black};
      background: ${palette.orange5};
      border: 2px solid ${palette.orange};
      font-weight: 700;
    `}
`;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: row-reverse;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 36rem;
  z-index: 10;
  padding: ${r[15]}rem;
  margin-bottom: ${r[70]}rem;
`;

const StyledButton = styled(Button)`
  width: ${r[160]}rem;
  margin-right: ${r[2]}rem;
`;

const Padding = styled.div`
  margin: 0;
  padding: 0;
  width: ${r[3]}rem;
`;

const categories = ['전체 글', '만나요', '전화/카톡'];

const PostList = () => {
  const [selectCategory, setSelectCategory] = useState('전체 글');

  const onSelect = (category) => {
    setSelectCategory(category);
  };

  return (
    <>
      <MainboardSlider />
      <CategoryContainer>
        {categories.map((category) => (
          <StyledCategoryButton
            key={category}
            active={selectCategory === category}
            onClick={() => {
              onSelect(category);
            }}
          >
            {selectCategory === category ? (
              <OrangeCheck style={{ marginRight: `${r[8]}rem` }} />
            ) : null}
            {category}
          </StyledCategoryButton>
        ))}
      </CategoryContainer>
      <ButtonBlock>
        <StyledButton to={'/select'}>
          <Plus style={{ marginTop: '0px' }} /> <Padding />
          재능 나누기
        </StyledButton>
      </ButtonBlock>
      <PostForm />
      <PostForm closed />
      <PostForm />
    </>
  );
};

export default PostList;
