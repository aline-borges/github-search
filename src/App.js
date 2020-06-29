import React from 'react';
import Global from './assets/styles/Global';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Repository from './pages/Repository';
import Stars from './pages/Star';
import Following from './pages/Following';
import Followers from './pages/Followers';

function App() {
  return (
    <>
      <Home />
      <Profile />
      <Repository />
      <Stars />
      <Following />
      <Followers />
      <Global />
    </>
  );
}

export default App;
