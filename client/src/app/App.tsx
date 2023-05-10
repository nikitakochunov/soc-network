import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './config/routes'
import ProtectedRoute from './components/protectedRoute'
import { AuthProvider } from './hooks/useAuth'
import { PostsProvider } from './hooks/usePosts'

const App: React.FunctionComponent<{}> = () => {
  return (
    <AuthProvider>
      <PostsProvider>
        <Header />
        <Main>
          <Switch>
            {routes.map((route, index) => {
              return (
                // <ProtectedRoute
                //   key={index}
                //   path={route.path}
                //   component={route.component}
                // />
                <Route key={index} {...route} />
              )
            })}
            <Redirect to='/feed' />
          </Switch>
        </Main>
      </PostsProvider>
    </AuthProvider>
  )
}

export default App
