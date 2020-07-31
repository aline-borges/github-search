import React from 'react';
import Global from './assets/styles/Global';
import Header from './components/molecules/header/Header';
import Home from './templates/home/Home';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Global />
    </>
  );
}

export default App;
