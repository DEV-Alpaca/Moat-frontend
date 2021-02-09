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

const App = () => {
  return (
    <Template>
      <Route component={PostListPage} path={['/@:username', '/']} exact />

      <Route component={AuthPage} path="/Auth" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />

      <Route component={WritePage} path="/write" />
      <Route component={SelectLocationPage} path="/SelectLocationPage" />
      <Route component={MyPage} path="/@:username/:postId" />
    </Template>
  );
};

export default App;
