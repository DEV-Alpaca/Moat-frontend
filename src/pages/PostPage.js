import React from 'react';
import Nav from '../components/common/Nav';
import PostViewer from '../components/post/PostViewer';

const PostPage = () => {
  return (
    <>
      <Nav goback home notSpacer />
      <PostViewer />
    </>
  );
};

export default PostPage;
