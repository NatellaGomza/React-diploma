import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import PagesRouter from './pages/PagesRouter';
import MainPage from './pages/MainPage';

ReactDOM.render( 
  <BrowserRouter>
    <div>
      <MainPage />
    </div>
  </BrowserRouter>
, document.getElementById('container') );
