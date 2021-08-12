import 'normalize.css';
import React from 'react';
import './styles/main.scss';
import ReactDOM from 'react-dom';
import '@saeris/typeface-beleren-bold';
import 'react-tabs/style/react-tabs.css';

import App from './pages';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
