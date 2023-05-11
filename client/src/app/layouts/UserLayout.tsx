import React from 'react'
import UserPage from '../pages/UserPage'
import { useParams } from 'react-router-dom'
import IParams from '../interfaces/params'
import UsersListPage from '../pages/UsersListPage'
import UserProvider from '../hooks/useUser'
import { PostsProvider } from '../hooks/usePosts'

const UserLayout = () => {
  const { userId }: IParams = useParams()

  return (
    <UserProvider>
      <PostsProvider>
        {userId ? <UserPage userId={userId} /> : <UsersListPage />}
      </PostsProvider>
    </UserProvider>
  )
}

export default UserLayout
