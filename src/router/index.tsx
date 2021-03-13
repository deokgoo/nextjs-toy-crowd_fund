import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../pages/login';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
