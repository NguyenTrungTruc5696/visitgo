import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './Component/HomePage';
//import AboutPage from '/Component/AboutPage';

const Router = () => (

  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={HomePage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;