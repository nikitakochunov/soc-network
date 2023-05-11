import React from 'react'
import UserPage from '../pages/UserPage'
import { useParams } from 'react-router-dom'
import IParams from '../interfaces/params'
import UsersListPage from '../pages/UsersListPage'

const UserLayout = () => {
  const { userId }: IParams = useParams()

  if (userId) {
    return <UserPage userId={userId} />
  }

  return <UsersListPage />
}

export default UserLayout
