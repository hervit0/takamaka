import React from 'react';
import CustomAppBar from './components/appBar/appBar';
import './App.css';
import AuthenticationContainer from './navigation/authenticationLayer';
import Router from './navigation/router';

function App() {
  return (
    <div className="App">
      <AuthenticationContainer>
        <CustomAppBar/>
        <header className="App-header">
          <Router/>
        </header>
        <footer className="App-footer">
          <pre>{process.env.NODE_ENV}</pre>
          <pre>{process.env.REACT_APP_GIT_SHA}</pre>
        </footer>
      </AuthenticationContainer>
    </div>
  );
}

export default App;
