import React from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'

const UsersListPage: React.FunctionComponent<{}> = () => {
  return (
    <Page title='Все пользователи'>
      <UsersList />
    </Page>
  )
}

export default UsersListPage
