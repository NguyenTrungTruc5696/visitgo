import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SuggestionPage from './Pages/SuggestionPage';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

const Router = () => (

  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/suggestions" component={SuggestionPage}/>
        <Route path="/signin" component={SignInPage}/>
        <Route path="/" component={SignUpPage}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);
export default Router;