import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../components/App';

const AppRouter = () => (
  <BrowserRouter basename={process.env.PUBLIC_PATH} >
    <Switch>
      <Route path ="/" component={App} exact />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;