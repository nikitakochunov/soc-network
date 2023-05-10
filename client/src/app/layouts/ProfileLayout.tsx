import React from 'react'
import UserPage from '../pages/UserPage'
import { useParams } from 'react-router-dom'
import IParams from '../interfaces/params'
import UsersListPage from '../pages/UsersListPage'

const UserLayout = () => {
  const { user }: IParams = useParams()

  if (user === '123') {
    return <UserPage />
  }

  return <UsersListPage />
}

export default UserLayout
