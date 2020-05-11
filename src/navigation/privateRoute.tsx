import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/auth';
import { isAuthenticated } from '../services/authentication';
import { RouteNames } from './router';

type PrivateRouteProps = {
  component: React.ComponentType<any>
  path: string
}

const PrivateRoute = ({ component, path }: PrivateRouteProps) => {
  const { authTokens } = useAuth();

  return (
    isAuthenticated(authTokens) ? (
      <Route path={path} component={component}/>
    ) : (
      <Redirect to={RouteNames.signin}/>
    )
  );
};

export default PrivateRoute;