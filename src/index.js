import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouterConfig from './router'
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'
// import  "./app.scss";
ReactDOM.render(
  <BrowserRouter>
      <RouterConfig />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
