import React from 'react'
import Header from './components/Header'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import ProtectedRoute from './components/protectedRoute'
import { AuthProvider } from './hooks/useAuth'

const App: React.FunctionComponent<{}> = () => {
  return (
    <AuthProvider>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return route.isProtected ? (
            <ProtectedRoute
              key={index}
              path={route.path}
              component={route.component}
            />
          ) : (
            <Route key={index} {...route} />
          )
        })}
        <Redirect to='/feed' />
      </Switch>
    </AuthProvider>
  )
}

export default App
