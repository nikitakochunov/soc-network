import React from 'react'
import AddPostForm from '../components/Posts/AddPostForm'
import Page from '../components/common/Page'
import Posts from '../components/Posts/Posts'

const FeedPage: React.FunctionComponent<{}> = (): any => {
  return (
    <Page title='Новости'>
      <Posts />
    </Page>
  )
}

export default FeedPage
