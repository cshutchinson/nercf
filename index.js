import React from 'react';
import { render } from 'react-dom';
import App from './modules/App';
import { createHistory } from 'history';
import { Router, Route, useRouterHistory } from 'react-router';

const browserHistory = useRouterHistory(createHistory)({
  basename: '/foo/bar'
});


import About from './modules/About';
import Repos from './modules/Repos';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/repos" component={Repos}/>
        <Route path="/about" component={About}/>
      <Route path="*" component={App} />
    </Route>
  </Router>
), document.getElementById('app'));



