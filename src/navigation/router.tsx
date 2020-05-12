import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FinalPage from '../pages/final/finalPage';
import Level1 from '../pages/level/level1';
import Level2 from '../pages/level/level2';
import Level3 from '../pages/level/level3';
import Level4 from '../pages/level/level4';
import Level5 from '../pages/level/level5';
import Level6 from '../pages/level/level6';
import WelcomePage from '../pages/welcome/welcomePage';
import { decrypt } from '../services/cryptography';

const Router = () => (
  <HashRouter basename='/'>
    <Switch>
      <Route exact path={RouteNames.root} component={WelcomePage}/>
      <Route path={`/${RouteNames.level1}`} component={Level1}/>
      <Route path={`/${RouteNames.level2}`} component={Level2}/>
      <Route path={`/${RouteNames.level3}`} component={Level3}/>
      <Route path={`/${RouteNames.level4}`} component={Level4}/>
      <Route path={`/${RouteNames.level5}`} component={Level5}/>
      <Route path={`/${RouteNames.level6}`} component={Level6}/>
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
  level4: uuidv4(),
  level5: uuidv4(),
  level6: uuidv4(),
};

export const Routes = {
  root: `#${RouteNames.root}`,
  final: `#${RouteNames.final}`,
  level1: `#${RouteNames.level1}`,
  level2: `#${RouteNames.level2}`,
  level3: `#${RouteNames.level3}`,
  level4: `#${RouteNames.level4}`,
  level5: `#${RouteNames.level5}`,
  level6: `#${RouteNames.level6}`,
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
    case '4': {
      return RouteNames.level4;
    }
    case '5': {
      return RouteNames.level5;
    }
    case '6': {
      return RouteNames.level6;
    }
    default: {
      return RouteNames.final;
    }
  }
};

export default Router;