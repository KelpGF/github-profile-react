import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from "./global/GlobalStyle";
import Providers from './Providers';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Providers />
  </React.StrictMode>,
  document.getElementById('root')
);
