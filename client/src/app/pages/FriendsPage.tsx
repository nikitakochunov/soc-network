import React, { useEffect, useState } from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'
import { useAuth } from '../hooks/useAuth'
import { useUsers } from '../hooks/useUser'
import Wrapper from '../components/common/Wrapper'
import IUser from '../interfaces/user'
import sortByName from '../utils/sortByName'

const FriendsPage: React.FunctionComponent<{}> = (): any => {
  const { currentUser } = useAuth()
  const { getUserFriends } = useUsers()

  const friends = getUserFriends(currentUser)

  if (friends.length === 0) {
    return (
      <Page title='Друзья'>
        <Wrapper>
          <div>У вас нет друзей</div>
        </Wrapper>
      </Page>
    )
  }

  const sortedFriends = sortByName(friends)

  return (
    <Page title='Друзья'>
      <UsersList users={sortedFriends} />
    </Page>
  )
}

export default FriendsPage
