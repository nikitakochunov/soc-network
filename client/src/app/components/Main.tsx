import React from 'react'
import Container from './common/Container'
import Sidebar from './Sidebar'
import ICommonComponent from '../interfaces/commonComponent'
import { Redirect, useLocation } from 'react-router-dom'
import UserProvider from '../hooks/useUser'
import { PostsProvider } from '../hooks/usePosts'
import { useAuth } from '../hooks/useAuth'

const Main: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  const { pathname }: any = useLocation()
  const { currentUser } = useAuth()

  console.log(children)

  if (!currentUser) {
    return <Redirect to='/auth' />
  }

  if (!currentUser && pathname === '/auth') {
    return <main className='main'>{children}</main>
  }

  return (
    <main className='main'>
      {currentUser && (
        <Container>
          <div className='page-layout'>
            <div className='page-layout__item page-sidebar'>
              <Sidebar />
            </div>
            <div className='page-layout__item page-body'>{children}</div>
          </div>
        </Container>
      )}
    </main>
  )
}

export default Main
