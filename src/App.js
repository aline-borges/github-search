import React from 'react';
import Global from './assets/styles/Global';
import Home from './pages/Home';
import api from './services/api';

function App() {
  return (
    <>
      <Home />
      <Global />
    </>
  );
}

export default App;
