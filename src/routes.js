import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Repositories from './pages/repositories/Repositories';
import Stars from './pages/stars/Stars';
import Following from './pages/following/Following';
import Followers from './pages/followers/Followers';
import NotFound from './pages/status/notFound/NotFound';
import ServerError from './pages/status/serverError/ServerError';
import Forbidden from './pages/status/forbidden/Forbidden';
import TimeOut from  './pages/status/timeOut/TimeOut';
import Gone from './pages/status/gone/Gone';
import BadRequest from './pages/status/badRequest/BadRequest';
import Unauthorized from './pages/status/unauthorized/Unauthorized';
import Unavailable from './pages/status/unavailable/Unavailable';
import Gateway from './pages/status/gateway/Gateway';

const AppRoute = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/profile" element={<Profile />} exact />
      <Route path="/profile/repositories" element={<Repositories />} />
      <Route path="/profile/stars" element={<Stars />} />
      <Route path="/profile/following" element={<Following />} />
      <Route path="/profile/followers" element={<Followers />} />
      <Route path="/400" element={<BadRequest />} />
      <Route path="/401" element={<Unauthorized />} />
      <Route path="/403" element={<Forbidden />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="/408" element={<TimeOut />} />
      <Route path="/410" element={<Gone />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="/503" element={<Unavailable />} />
      <Route path="/504" element={<Gateway />} />
    </Routes>
  );
}

export default AppRoute 
