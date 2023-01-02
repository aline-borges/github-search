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
      <Route path="/" component={Home} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/profile/repositories" component={Repositories} />
      <Route path="/profile/stars" component={Stars} />
      <Route path="/profile/following" component={Following} />
      <Route path="/profile/followers" component={Followers} />
      <Route path="/400" component={BadRequest} />
      <Route path="/401" component={Unauthorized} />
      <Route path="/403" component={Forbidden} />
      <Route path="/404" component={NotFound} />
      <Route path="/408" component={TimeOut} />
      <Route path="/410" component={Gone} />
      <Route path="/500" component={ServerError} />
      <Route path="/503" component={Unavailable} />
      <Route path="/504" component={Gateway} />
    </Routes>
  );
}

export default AppRoute 
