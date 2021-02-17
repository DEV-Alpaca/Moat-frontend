import React from 'react';
import Header from '../components/common/Header';
import PostList from '../components/postList/PostList';

const PostListPage = () => {
  return (
    <>
      <Header title={true} />
      <PostList />
    </>
  );
};

export default PostListPage;
