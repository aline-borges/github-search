import React from 'react';
import Global from './assets/styles/Global';
import Home from './templates/home/Home';
import Profile from './templates/profile/Profile';

function App() {
  return (
    <>
      <Profile />
      <Home />
      <Global />
    </>
  );
}

export default App;
