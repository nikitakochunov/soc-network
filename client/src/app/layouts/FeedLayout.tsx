import React from 'react'
import FeedPage from '../pages/FeedPage'
import UserProvider from '../hooks/useUser'
import { PostsProvider } from '../hooks/usePosts'

const FeedLayout = () => {
  return (
    <UserProvider>
      <PostsProvider>
        <FeedPage />
      </PostsProvider>
    </UserProvider>
  )
}

export default FeedLayout
