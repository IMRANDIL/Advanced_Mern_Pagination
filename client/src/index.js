import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path='/page/:pageNumber' component={App} />
      <Route exact path='/' component={App} />
    </Routes>
  </Router>,
  document.getElementById('root')
);


