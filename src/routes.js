import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Repositories from './pages/repositories/Repositories';
import Stars from './pages/stars/Stars';
import Following from './pages/following/Following';
import Followers from './pages/followers/Followers';
import NotFound from './pages/status/notFound/NotFound';
import ServerError from './pages/status/serverError/ServerError';

const Routes = () => {
  return(
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/profile" component={Profile} exact />
      <Route path="/profile/repositories" component={Repositories} />
      <Route path="/profile/stars" component={Stars} />
      <Route path="/profile/following" component={Following} />
      <Route path="/profile/followers" component={Followers} />
      <Route path="/404" component={NotFound} />
      <Route path="/500" component={ServerError} />
    </Switch>
  );
}

export default Routes 
