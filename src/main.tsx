/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

import './styles/setup.scss';
import './index.scss';
import { BrowserRouter as Router } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
