import React from 'react'
import { PostsList } from '../components/Posts'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'
import { useAuth } from '../hooks/useAuth'

const FeedPage: React.FunctionComponent<{}> = (): any => {
  const { currentUser } = useAuth()

  if (!currentUser) {
    return 'Загрузка...'
  }

  return (
    <Page title='Новости'>
      <AddPostForm userId={currentUser._id} />
      <PostsList />
    </Page>
  )
}

export default FeedPage
