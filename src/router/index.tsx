import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import FundingDetail from '../pages/funding-detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/register" component={Register}/>
        <Route exact={true} path="/funding/:id" component={FundingDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
