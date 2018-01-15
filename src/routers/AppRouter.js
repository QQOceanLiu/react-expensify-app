import React from 'react';
import ExpenseDashboard from '../components/ExpenseDashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Header}/>
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true}/>
        <Route path="/create" component={AddExpense}/>
        <Route path="/edit/:id" component={EditExpense}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;

