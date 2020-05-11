import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import NewStoryPage from '../pages/newStory/newStoryPage';
import NotFoundPage from '../pages/notFound/notFoundPage';
import SignInPage from '../pages/signIn/signInPage';
import DemoStoryPage from '../pages/story/demoStoryPage';
import StoryPage from '../pages/story/storyPage';
import UserDashboardPage from '../pages/userDashboard/userDashboardPage';
import WelcomePage from '../pages/welcome/welcomePage';
import PrivateRoute from './privateRoute';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path={RouteNames.root} component={WelcomePage}/>
      <Route path={`/${RouteNames.signin}`} component={SignInPage}/>
      <PrivateRoute path={`/${RouteNames.dashboard}`} component={UserDashboardPage}/>
      <PrivateRoute path={`/${RouteNames.newStory}`} component={NewStoryPage}/>
      <PrivateRoute path={`/${RouteNames.story}`} component={StoryPage}/>
      <PrivateRoute path={`/${RouteNames.demoStory}`} component={DemoStoryPage}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </HashRouter>
);

export const RouteNames = {
  root: '/',
  signin: 'signin',
  dashboard: 'dashboard',
  newStory: 'newStory',
  story: 'story',
  demoStory: 'demoStory',
};

export const Routes = {
  root: '/',
  signin: `#${RouteNames.signin}`,
  dashboard: `#${RouteNames.dashboard}`,
  newStory: `#${RouteNames.newStory}`,
  story: `#${RouteNames.story}`,
  demoStory: `#${RouteNames.demoStory}`,
};

export default Router;