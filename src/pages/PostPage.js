import React from 'react';
import Nav from '../components/common/Nav';
import PostViewer from '../components/post/PostViewer';

const PostPage = ({ closed }) => {
  return (
    <>
      <Nav goback home notSpacer />
      <PostViewer {...{ closed }} />
    </>
  );
};

export default PostPage;
