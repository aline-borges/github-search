import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes';
import Global from './assets/styles/Global';

ReactDOM.render(
  <BrowserRouter>
    <Global />
    <AppRoute />
  </BrowserRouter>,
  document.getElementById('root')
);
