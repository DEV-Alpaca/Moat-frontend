import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../../../lib/styles/Form';
import Button from '../../common/Button';

const WriteInfoFormBlock = styled(Form)``;

const WriteInfoForm = () => {
  const [page, setPage] = useState(1);

  return (
    <WriteInfoFormBlock>
      {page === 1 && <Button>알아보기</Button>}
      {page === 2 && <Button>다음으로</Button>}
      {page === 3 && <Button>신청하기</Button>}
    </WriteInfoFormBlock>
  );
};

export default WriteInfoForm;
