import React from 'react';
import ReactDOM from 'react-dom/client';

import { Router } from '@/Router';

import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) throw Error('Root element could not be find!');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
);
