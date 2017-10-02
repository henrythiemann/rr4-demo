import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const AuthRoute = ({ path, auth, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect to="/" />
      )
    )}
  />
)

export default AuthRoute
