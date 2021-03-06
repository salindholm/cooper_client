import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from 'react-router-dom';

let apiUrl;
if (process.env.NODE_ENV === "production") {
  apiUrl ="https://whssl-cooper-api.herokuapp.com/api/v1";
} else {
  apiUrl = "http://localhost:3000/api/v1";
}
axios.defaults.baseURL = apiUrl;

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
