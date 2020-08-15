import React from 'react';
import Global from './assets/styles/Global';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Repositories from './pages/repositories/Repositories';
import Stars from './pages/stars/Stars';
import Following from './pages/following/Following';
import Followers from './pages/followers/Followers';

function App() {
  return (
    <>
      <Home />
      <Profile />
      <Repositories />
      <Stars />
      <Following />
      <Followers />
      <Global />
    </>
  );
}

export default App;
