import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './containers/Dashboard';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
