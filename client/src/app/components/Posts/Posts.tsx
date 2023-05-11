import React from 'react'
import { PostsProvider } from '../../hooks/usePosts'
import PostsList from './PostsList'
import AddPostForm from './AddPostForm'

const Posts: React.FunctionComponent<{}> = () => {
  return (
    <PostsProvider>
      <AddPostForm />
      <PostsList />
    </PostsProvider>
  )
}

export default Posts
