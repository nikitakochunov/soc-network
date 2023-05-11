import React from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'
import { useUsers } from '../hooks/useUser'

const UsersListPage: React.FunctionComponent<{}> = () => {
  const { users } = useUsers()

  return (
    <Page title='Все пользователи'>
      <UsersList users={users} />
    </Page>
  )
}

export default UsersListPage
