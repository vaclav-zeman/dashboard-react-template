import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Dashboard from './containers/Dashboard/';
import Users from './containers/Users/';
import Messages from './containers/Messages/';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute title="Dashboard" component={Dashboard} />
    <Route path="/messages" title="Messages" component={Messages} />
    <Route path="/users" title="Users" component={Users} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
