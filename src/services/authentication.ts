export const isAuthenticated = (authTokens?: string) => {
  return !!authTokens && authTokens!.length !== 0;
};