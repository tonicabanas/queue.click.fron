import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFound from 'views/NotFound';

const publicPath = '/';

export const routeCodes = {
  DASHBOARD: publicPath,
  ABOUT: `${ publicPath }about`,
};

export default () => (
  <Switch>
    <Route path='*' component={NotFound}/>
  </Switch>
);
