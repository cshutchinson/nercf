import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import { Router, Route, browserHistory } from 'react-router';


import About from './modules/About';
import Repos from './modules/Repos';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));



