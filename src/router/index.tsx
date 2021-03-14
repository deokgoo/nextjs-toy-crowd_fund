import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
