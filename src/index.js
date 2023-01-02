import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './routes';
import Global from './assets/styles/Global';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Global />
    <AppRoute />
  </BrowserRouter>
);
