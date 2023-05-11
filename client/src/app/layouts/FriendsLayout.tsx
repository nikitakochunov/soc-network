import React from 'react'
import FriendsPage from '../pages/FriendsPage'
import UserProvider from '../hooks/useUser'

const FriendsLayout = () => {
  return (
    <UserProvider>
      <FriendsPage />
    </UserProvider>
  )
}

export default FriendsLayout
