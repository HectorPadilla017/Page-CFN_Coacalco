import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/Function/ScrollToTop';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
