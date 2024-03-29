import React from 'react';
import Nav from '../components/common/Nav';
import WriteFormContainer from '../containers/write/WriteFormContainer';
import qs from 'qs';
import UploadPictureContainer from '../containers/write/UploadPictureContainer';
import WriteActionButtonContainer from '../containers/write/WriteActionButtonContainer';
import EditorContainer from '../containers/write/EditorContainer';
import Padding from '../components/common/Padding';

const WritePage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <Nav goback text={`${query.district} 재능나누기 신청`} />
      <WriteFormContainer district={query.district} />
      <Padding height={24} />
      <UploadPictureContainer />
      <EditorContainer />
      <Padding height={20} />
      <WriteActionButtonContainer />
    </>
  );
};

export default WritePage;
