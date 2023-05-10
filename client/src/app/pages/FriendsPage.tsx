import React from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'

const FriendsPage: React.FunctionComponent<{}> = () => {
  return (
    <Page title='Друзья'>
      <UsersList />
    </Page>
  )
}

export default FriendsPage
