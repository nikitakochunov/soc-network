import React from 'react'
import PostsList from './PostsList'
import AddPostForm from './AddPostForm'
import { useAuth } from '../../hooks/useAuth'
import { useParams } from 'react-router-dom'
import IPost from '../../interfaces/post'

interface Props {
  posts: IPost[]
}

const Posts: React.FunctionComponent<Props> = ({ posts }) => {
  const { userId } = useParams<any>()
  const { currentUser } = useAuth()

  return (
    <>
      {userId === currentUser._id && <AddPostForm />}
      <PostsList posts={posts} />
    </>
  )
}

export default Posts
