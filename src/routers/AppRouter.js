import { Route, Switch, Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "./../components/DashboardPage";
import LoginPage from "./../components/LoginPage";
import NotFoundPage from "./../components/NotFoundPage";
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import React from "react";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
