import React from 'react';
import styled, { css } from 'styled-components';
import qs from 'qs';
import Button from '../common/Button';
import Tag from '../common/Tag';

import { ReactComponent as LeftPage } from '../../assets/leftPage.svg';
import { ReactComponent as RightPage } from '../../assets/rightPage.svg';
import r from '../../lib/styles/Rem';
import Form from '../../lib/styles/Form';
import palette from '../../lib/styles/paletts';

const PaginationBlock = styled.div`
  padding: ${r[48]}rem ${r[24]}rem;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: ${r[40]}rem;
  height: ${r[40]}rem;
  margin: 0;
  padding: 0;
`;

const PageNumberBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  /* margin: 0 ${r[16]}rem; */

  width: 73%;
  /* border: 1px solid blue; */
  padding: 0;
`;

const PageNumber = styled.div`
  width: ${r[40]}rem;
  height: ${r[40]}rem;
  margin: 0 auto;
  color: ${palette.gray[200]};

  display: flex;
  /* border: 1px solid red; */
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: ${palette.orange};
      background: ${palette.orange5};
      border-radius: 4px;
      border: 1px solid ${palette.orange};
    `}
`;

let lastPage = 14;
var pageNumbers = [];
for (var i = 1; i <= lastPage; i++) {
  pageNumbers[i] = i;
}

const Pagination = () => {
  return (
    <PaginationBlock>
      <StyledButton gray>
        <LeftPage />
      </StyledButton>
      <PageNumberBlock>
        <PageNumber active>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
        {/* {PageNumbers.map((page) => (
          <PageNumber>{page < 5 ? page : null}</PageNumber>
        ))} */}
      </PageNumberBlock>
      <StyledButton>
        <RightPage />
      </StyledButton>
    </PaginationBlock>
  );
};

export default Pagination;
