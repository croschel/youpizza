import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '~/routes/Route';
import SignIn from '~/pages/SignIn';
import Home from '~/pages/Home';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
