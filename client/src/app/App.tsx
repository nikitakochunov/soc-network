import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './config/routes'

const App: React.FunctionComponent<{}> = () => {
  return (
    <>
      <Header />
      <Main>
        <Switch>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />
          })}
          <Redirect to='/feed' />
        </Switch>
      </Main>
    </>
  )
}

export default App
