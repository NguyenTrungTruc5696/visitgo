import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import SuggestionPage from './Component/SuggestionPage';
import SignInPage from './Component/SignInPage';

const Router = () => (

  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/suggestions" component={SuggestionPage}/>
        <Route path="/signin" component={SignInPage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;