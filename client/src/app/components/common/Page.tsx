import React, { useEffect } from 'react'
import IPage from '../../interfaces/page'
import Sidebar from '../Sidebar'
import Container from './Container'
import UserProvider from '../../hooks/useUser'
import { PostsProvider } from '../../hooks/usePosts'

const Page: React.FunctionComponent<IPage> = ({ children, title }) => {
  const $title: HTMLTitleElement | null = document.querySelector('title')

  useEffect(() => {
    $title!.text = title
  }, [title])

  const pageChildren = React.Children.map(children, (child) => {
    return <div className='page__item'>{child}</div>
  })

  return (
    <main className='main'>
      <Container>
        <div className='page-layout'>
          <div className='page-layout__item page-sidebar'>
            <Sidebar />
          </div>
          <div className='page-layout__item page-body'>
            <UserProvider>
              <PostsProvider>
                <div className='page'>{pageChildren}</div>
              </PostsProvider>
            </UserProvider>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default Page
