import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
import { axe } from 'axe-core';
import './axe-setup';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Accessibility checks
if (process.env.NODE_ENV === 'test') {
  axe.run(root, (err, results) => {
    if (err) throw err;
    console.log(results);
  });
}