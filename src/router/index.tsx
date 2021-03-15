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
import Invest from '../pages/invest';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/funding/:id/invest" render={() => <Login next={Invest} path="/funding"/>}/>
        <Route exact={true} path="/register" component={Register}/>
        <Route exact={true} path="/funding/:id" component={FundingDetail} />
        <Route exact={true} path="/funding" render={() => <Login next={FundingList} path="/funding"/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
