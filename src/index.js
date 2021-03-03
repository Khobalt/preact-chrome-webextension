/* eslint-disable import/first */
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production') {
  require('preact/debug');
}

import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
