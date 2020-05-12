import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';
import CustomAppBar from './components/appBar/appBar';
import Router from './navigation/router';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <CustomAppBar/>
        {/*<header className="App-header">*/}
        <Router/>
        {/*</header>*/}
        {/*<footer className="App-footer">*/}
        {/*  <pre>{process.env.NODE_ENV}</pre>*/}
        {/*  <pre>{process.env.REACT_APP_GIT_SHA}</pre>*/}
        {/*</footer>*/}
      </CookiesProvider>
    </div>
  );
}

export default App;
