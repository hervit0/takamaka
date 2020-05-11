// https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

import { createContext, useContext } from 'react';

type AuthContextType = {
  authTokens?: string,
  setAuthTokens?: Function
}

const defaultAuthContext: AuthContextType = {};

export const AuthContext = createContext(defaultAuthContext);

export const useAuth = () => {
  return useContext(AuthContext);
};
