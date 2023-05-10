import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, children = [], ...rest }) => {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return (
            <Redirect
              to={{
                pathname: '/auth',
                state: { from: props.location },
              }}
            />
          )
        }
        return Component ? <Component {...props} /> : children
      }}
    />
  )
}

export default ProtectedRoute
