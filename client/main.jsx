'use strict';

import 'styles/blaze.min.css';
import 'styles/gridforms.scss';
import 'styles/filepicker.css';
import 'styles/Menu.scss';
import 'styles/main.scss';

import 'config/firebase.js';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'

import Index from 'components/Index/Index';
import Nuevo from 'components/Nuevo/Nuevo';
import NotFound from 'components/NotFound/NotFound';

render((
  <Router history={browserHistory}>
    <Route path="/" component={Index}/>
    <Route path="/nuevo" component={Nuevo}/>
    <Route path="*"s component={NotFound}/>
  </Router>
), document.getElementById('js-main'));
