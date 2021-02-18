import React from 'react';
import Template from './lib/styles/Template';
import { Route } from 'react-router-dom';

import AuthPage from './pages/AuthPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';

import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import SelectLocationPage from './pages/SelectLocationPage';
import WritePage from './pages/WritePage';
import PasswordChangePage from './pages/PasswordChangePage';

const App = () => {
  return (
    <Template>
      <Route component={LoginPage} path="/login" />
      <Route component={AuthPage} path="/auth" />
      <Route component={RegisterPage} path="/register" />
      <Route component={PasswordChangePage} path="/password" />
      <Route component={PostListPage} path={['/@:username', '/']} exact />
      <Route component={SelectLocationPage} path="/select" />
      <Route component={WritePage} path="/write" />
      <Route component={MyPage} path="/@:username/:postId" />
    </Template>
  );
};

export default App;
