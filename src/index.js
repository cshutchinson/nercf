import React from 'react';
import { render } from 'react-dom';
import App from '../modules/App';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

import About from '../modules/About';
import Repos from '../modules/Repos';

const history = useRouterHistory(createHistory)({
    basename: '/sandbox/dgc-tooling-rita'
});

render((
  <Router history={history}>
    <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'));



