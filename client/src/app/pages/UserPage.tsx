import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import { PostsList } from '../components/Posts'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'
import { useAuth } from '../hooks/useAuth'
import { useUsers } from '../hooks/useUser'

interface Props {
  userId: string
}

const ProfilePage: React.FunctionComponent<Props> = ({ userId }): any => {
  return (
    <Page title='Пользователь'>
      <ProfileInfo userId={userId} />
      <AddPostForm userId={userId} />
      <PostsList userId={userId} />
    </Page>
  )
}

export default ProfilePage
