import React from 'react';
import {
  BrowserRouter, Route, Switch, HashRouter
} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
// Add more components here
// import Bio from '../components/Bio';


const AppRouter = () => (
  // Note: using HashRouter for deploying on GitHub Pages
  // as it doesn't support Single Page Applications.
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        {/* Add more components to the header like the sample below */}
        {/* <Route path="/bio" component={Bio} exact /> */}
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
