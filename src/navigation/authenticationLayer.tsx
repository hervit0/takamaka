import React, { ReactNode } from 'react';
import { AuthContext } from '../contexts/auth';

type AuthenticationContainerProps = {
  children: ReactNode
}

const AuthenticationContainer = ({ children }: AuthenticationContainerProps) => {
  // const existingTokens = JSON.parse(localStorage.getItem('tokens'));
  const existingTokens = '';
  const [authTokens, setAuthTokens] = React.useState(existingTokens);

  const setTokens = (data: string) => {
    // localStorage.setItem('tokens', JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthenticationContainer;