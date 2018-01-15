import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create a new Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Need some Help?</NavLink>
  </header>
);

export default Header;