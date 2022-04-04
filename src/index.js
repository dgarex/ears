import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {ThemeProvider} from "react-bootstrap";


ReactDOM.render(

  <React.StrictMode>
      <BrowserRouter>
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      >
            <App />

      </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);
