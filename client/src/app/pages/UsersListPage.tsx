import React from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'
import { useUsers } from '../hooks/useUser'
import sortByName from '../utils/sortByName'

const UsersListPage: React.FunctionComponent<{}> = () => {
  const { users } = useUsers()

  const sortedUsers = sortByName(users)

  return (
    <Page title='Все пользователи'>
      <UsersList users={sortedUsers} />
    </Page>
  )
}

export default UsersListPage
