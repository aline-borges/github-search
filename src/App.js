import React from 'react';
import Global from './assets/styles/Global';
import Home from './templates/home/Home';
import Profile from './templates/profile/Profile';
import Repositories from './templates/repositories/Repositories';
import Stars from './templates/stars/Stars';

function App() {
  return (
    <>
      <Home />
      <Profile />
      <Repositories />
      <Stars />
      <Global />
    </>
  );
}

export default App;
