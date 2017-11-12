import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";
import React from "react";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  path,
  ...rest
}) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Redirect to="/dashboard" />
        </div>
      ) : (
        <Component {...props}/>
      )
    }
  />
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
