import Link from '@material-ui/core/Link';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import WelcomePage from '../pages/welcome/welcomePage';
import { decrypt } from '../services/cryptography';
import Level from './level';

const Router = () => (
  <HashRouter basename='/'>
    <Link href={Routes.level1}>
      Level 1
    </Link>
    <Link href={Routes.level2}>
      Level 2
    </Link>
    <Switch>
      <Route exact path={RouteNames.root} component={WelcomePage}/>
      <Route path={`/${RouteNames.level1}`} component={() => <Level stage={'1'}/>}/>
      <Route path={`/${RouteNames.level2}`} component={() => <Level stage={'2'}/>}/>
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