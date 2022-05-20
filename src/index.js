
import React from "react";
import ReactDOM from "react-dom";
// import "dotenv";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/Function/ScrollToTop";
// require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
