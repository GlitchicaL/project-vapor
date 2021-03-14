import React from 'react';
import ReactDOM from 'react-dom';

/**************************************************************************/

/*** IMPORT CSS ***/
import './css/index.css';
import './css/Header.css';
import './css/NavSidebar.css';
import './css/main/Main.css';
import './css/Footer.css';

import './css/main/CurrentForecast.css';

/**************************************************************************/

import App from './App';
import reportWebVitals from './reportWebVitals';

/**************************************************************************/

/*** RENDER ***/
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/**************************************************************************/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
