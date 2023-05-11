import React, { useEffect, useState } from 'react'
import Page from '../components/common/Page'
import { UsersList } from '../components/Users'
import { useAuth } from '../hooks/useAuth'
import { useUsers } from '../hooks/useUser'
import Wrapper from '../components/common/Wrapper'

const FriendsPage: React.FunctionComponent<{}> = (): any => {
  const { currentUser } = useAuth()
  const { users, getUserFriends } = useUsers()

  const [friends, setFriends] = useState([])

  useEffect(() => {
    setFriends(getUserFriends(currentUser))
    console.log(friends)
  }, [])

  if (friends.length === 0) {
    return (
      <Page title='Друзья'>
        <Wrapper>
          <div>У вас нет друзей</div>
        </Wrapper>
      </Page>
    )
  }

  return (
    <Page title='Друзья'>
      <UsersList users={friends} />
    </Page>
  )
}

export default FriendsPage
