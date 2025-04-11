import './assets/main.css';
import '../styles/style.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Application from './Application';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Application />
  </React.StrictMode>
);
