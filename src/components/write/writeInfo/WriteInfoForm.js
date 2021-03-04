import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../../../lib/styles/Form';
import Button from '../../common/Button';
import WriteInfoSlider from './WriteInfoSlider';

const WriteInfoFormBlock = styled.div``;

const WriteInfoForm = () => {
  return (
    <WriteInfoFormBlock>
      <WriteInfoSlider />
    </WriteInfoFormBlock>
  );
};

export default WriteInfoForm;
