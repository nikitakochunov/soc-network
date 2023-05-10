import React from 'react'
import Container from './common/Container'
import Sidebar from './Sidebar'
import ICommonComponent from '../interfaces/commonComponent'
import { useLocation } from 'react-router-dom'

const Main: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  const { pathname }: any = useLocation()

  return (
    <main className='main'>
      {pathname === '/auth' ? (
        children
      ) : (
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
