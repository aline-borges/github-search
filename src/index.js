import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Global from './assets/styles/Global';

ReactDOM.render(
  <BrowserRouter>
    <Global />
    <Routes />
  </BrowserRouter>,
  document.getElementById('root')
);
