import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {withRouter} from 'react-router-dom';
ReactDOM.render(
  <withRouter>
    <App />
  </withRouter>,
  document.getElementById('root'));
