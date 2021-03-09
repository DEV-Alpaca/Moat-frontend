import React from 'react';
import Nav from '../components/common/Nav';
import WriteFormContainer from '../containers/write/WriteFormContainer';
import qs from 'qs';
import WriteActionButton from '../containers/write/WriteActionButton';
import Form from '../lib/styles/Form';
import UploadPictureContainer from '../containers/write/UploadPictureContainer';

const WritePage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <>
      <Nav goback text={`${query.district} 재능나누기 신청`} />
      <Form>
        <WriteFormContainer district={query.district} />
        <UploadPictureContainer />
        <WriteActionButton />
      </Form>
    </>
  );
};

export default WritePage;
