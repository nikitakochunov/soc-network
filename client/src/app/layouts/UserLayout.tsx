import React from 'react'
import UserPage from '../pages/UserPage'
import { useParams } from 'react-router-dom'
import IParams from '../interfaces/params'
import UsersListPage from '../pages/UsersListPage'

const UserLayout = () => {
  const { userId }: IParams = useParams()

  return <>{userId ? <UserPage userId={userId} /> : <UsersListPage />}</>
}

export default UserLayout
