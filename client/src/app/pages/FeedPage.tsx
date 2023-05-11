import React from 'react'
import Page from '../components/common/Page'
import Posts from '../components/Posts/Posts'
import { useAuth } from '../hooks/useAuth'
import { usePosts } from '../hooks/usePosts'
import IPost from '../interfaces/post'

const FeedPage: React.FunctionComponent<{}> = (): any => {
  const { currentUser } = useAuth()

  const { posts } = usePosts()

  const friendsPosts: IPost[] = posts.filter((post: IPost) =>
    currentUser.friends ? currentUser.friends.includes(post.userId) : false
  )

  return (
    <Page title='Новости'>
      {friendsPosts.length !== 0 ? (
        <Posts posts={friendsPosts} />
      ) : (
        <div>Пока никаких новых постов!</div>
      )}
    </Page>
  )
}

export default FeedPage
