import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/scss/index.scss";
import "./assets/css/custom.css"
import "./assets/css/bootstrap.css";
import "./assets/css/freelancer.css"
import "./assets/css/popup.css";
import "./assets/css/swagger-ui.css";

import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

