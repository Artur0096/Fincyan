import React, {useState, useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import {Auth} from "aws-amplify";

export default function AuthenticatedRoute({ component: C, appProps, ...rest }) {
    console.log("appProps.isAuthenticated "+appProps.isAuthenticated);

  return (


    <Route
      {...rest}
      render={props =>
        appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect
              to={`/login-page`}
            />}
    />

   );
}