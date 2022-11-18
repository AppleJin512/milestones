import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux';
import configureStore from './storage/configureStore';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
