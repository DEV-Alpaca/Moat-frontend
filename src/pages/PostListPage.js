import React from 'react';
import FootBar from '../components/common/FootBar';
import Header from '../components/common/Header';
import Pagination from '../components/postList/Pagination';
import PostList from '../components/postList/PostList';
import QuestionBox from '../components/postList/QuestionBox';

const PostListPage = () => {
  return (
    <>
      <Header title={true} />
      <PostList />
      <Pagination />
      <QuestionBox />
      <FootBar />
    </> 
  );
};

export default PostListPage
