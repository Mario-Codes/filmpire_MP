import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
