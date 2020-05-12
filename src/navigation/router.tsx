import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FinalPage from '../pages/final/final';
import Level1 from '../pages/level/level1';
import Level2 from '../pages/level/level2';
import Level3 from '../pages/level/level3';
import WelcomePage from '../pages/welcome/welcomePage';
import { decrypt } from '../services/cryptography';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path={RouteNames.root} component={WelcomePage}/>
      <Route path={`/${RouteNames.level1}`} component={Level1}/>
      <Route path={`/${RouteNames.level2}`} component={Level2}/>
      <Route path={`/${RouteNames.level3}`} component={Level3}/>
      <Route path={`/${RouteNames.final}`} component={FinalPage}/>
      <Route component={WelcomePage}/>
    </Switch>
  </HashRouter>
);

export const RouteNames = {
  root: '/',
  final: 'final',
  level1: uuidv4(),
  level2: uuidv4(),
  level3: uuidv4(),
};

export const Routes = {
  root: `#${RouteNames.root}`,
  final: `#${RouteNames.final}`,
  level1: `#${RouteNames.level1}`,
  level2: `#${RouteNames.level2}`,
  level3: `#${RouteNames.level3}`,
};

export const getRoute = (cryptedLevel: string) => {
  switch (decrypt(cryptedLevel)) {
    case '1': {
      return RouteNames.level1;
    }
    case '2': {
      return RouteNames.level2;
    }
    case '3': {
      return RouteNames.level3;
    }
    default: {
      return RouteNames.final;
    }
  }
};

export default Router;