import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Level1 from '../pages/level/level1';
import Level2 from '../pages/level/level2';
import WelcomePage from '../pages/welcome/welcomePage';
import { decrypt } from '../services/cryptography';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path={RouteNames.root} component={WelcomePage}/>
      <Route path={`/${RouteNames.level1}`} component={Level1}/>
      <Route path={`/${RouteNames.level2}`} component={Level2}/>
      <Route component={WelcomePage}/>
    </Switch>
  </HashRouter>
);

export const RouteNames = {
  root: '/',
  level1: uuidv4(),
  level2: uuidv4(),
};

export const Routes = {
  root: `#${RouteNames.root}`,
  level1: `#${RouteNames.level1}`,
  level2: `#${RouteNames.level2}`,
};

export const getRoute = (cryptedLevel: string) => {
  switch (decrypt(cryptedLevel)) {
    case '1': {
      return RouteNames.level1;
    }
    case '2': {
      return RouteNames.level2;
    }
    default: {
      return Routes.root;
    }
  }
};

export default Router;