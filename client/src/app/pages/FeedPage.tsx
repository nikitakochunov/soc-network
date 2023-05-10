import React from 'react'
import { PostsList } from '../components/Posts'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'

const FeedPage: React.FunctionComponent<{}> = () => {
  return (
    <Page title='Новости'>
      <AddPostForm />
      <PostsList />
    </Page>
  )
}

export default FeedPage
