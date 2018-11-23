import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';


const Router = () => (

  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/gioi-thieu" component={AboutPage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;