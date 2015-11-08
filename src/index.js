'use strict';

import App from './common/components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

require('file?name=package.json!./package.web.json');
require('file?name=favicon.ico!../favicon.ico');

// CSS
require('normalize.css');
require('./styles/main.css');

var content = document.getElementById('content');

ReactDOM.render((
  <Router>
    <Route path="/" component={App} />
  </Router>
), content);