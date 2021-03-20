import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import LoginGuard from '../pages/login-guard';
import Register from '../pages/register';
import FundingDetail from '../pages/funding-detail';
import FundingList from '../pages/funding-list';
import Invest from '../pages/invest';
import { ComponentEntry } from '../pages/login-guard/type';

const Router = () => {
  const renderComponent = ({next, path}: ComponentEntry) => () => <LoginGuard next={FundingList} path="/login"/>;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" render={renderComponent({next: FundingList, path: '/login'})}/>
        <Route exact={true} path="/login" render={renderComponent({next: FundingList, path: '/login'})}/>
        <Route exact={true} path="/funding" render={renderComponent({next: FundingList, path: '/funding'})}/>
        <Route exact={true} path="/funding/:id/invest" render={() => <LoginGuard next={Invest} path="/funding"/>}/>
        <Route exact={true} path="/register" component={Register}/>
        <Route exact={true} path="/funding/:id" component={FundingDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
