import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'
import { useUsers } from '../hooks/useUser'
import IUser from '../interfaces/user'
import Wrapper from '../components/common/Wrapper'
import Posts from '../components/Posts/Posts'

interface Props {
  userId: string
}

const UserPage: React.FunctionComponent<Props> = ({ userId }): any => {
  const { getUserById } = useUsers()

  const user: IUser = getUserById(userId)

  if (!user) {
    return (
      <Page title='Пользователь'>
        <Wrapper>
          <div>Пользователь с таким id не найден</div>
        </Wrapper>
      </Page>
    )
  }

  return (
    <Page title={user.name}>
      <ProfileInfo userId={userId} />
      <Posts />
    </Page>
  )
}

export default UserPage
