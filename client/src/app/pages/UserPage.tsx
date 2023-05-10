import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import { PostsList } from '../components/Posts'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'
import { PostsProvider } from '../hooks/usePosts'

const ProfilePage: React.FunctionComponent<{}> = () => {
  return (
    <Page title='Никита Кочунов'>
      <ProfileInfo />
      <AddPostForm />
      <PostsList />
    </Page>
  )
}

export default ProfilePage
