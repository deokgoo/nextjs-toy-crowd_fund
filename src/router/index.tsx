import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Login from '../pages/login';
import Register from '../pages/register';
import FundingDetail from '../pages/funding-detail';
import FundingList from '../pages/funding-list';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/register" component={Register}/>
        <Route exact={true} path="/funding/:id" component={FundingDetail} />
        <Route exact={true} path="/funding" render={() => <Login next={FundingList} path="/funding"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
