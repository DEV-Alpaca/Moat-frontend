import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../common/Button';

import { ReactComponent as LeftPage } from '../../assets/leftPage.svg';
import { ReactComponent as RightPage } from '../../assets/rightPage.svg';
import r from '../../lib/styles/Rem';
import palette from '../../lib/styles/paletts';

const PaginationBlock = styled.div`
  padding: ${r[36]}rem ${r[24]}rem;
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  width: ${r[42]}rem;
  height: ${r[42]}rem;
  margin: 0;
  padding: 0;

  &:disabled {
    background: ${palette.gray[100]};
    cursor: not-not-allowed;
  }
`;

const PageNumberBlock = styled.div`
  display: flex;
  justify-content: flex-start;

  width: 70%;
  padding: 0;
`;

const PageNumber = styled.div`
  width: ${r[40]}rem;
  height: ${r[40]}rem;
  margin: 0 auto;
  color: ${palette.gray[200]};

  display: flex;
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
      <StyledButton gray disabled>
        <LeftPage />
      </StyledButton>
      <PageNumberBlock>
        <PageNumber active>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>4</PageNumber>
        <PageNumber>5</PageNumber>
        {/* {pageNumbers.map((page) => (
          <PageNumber>{page < 5 ? page : undefined}</PageNumber>
        ))} */}
      </PageNumberBlock>
      <StyledButton>
        <RightPage />
      </StyledButton>
    </PaginationBlock>
  );
};

export default Pagination;
