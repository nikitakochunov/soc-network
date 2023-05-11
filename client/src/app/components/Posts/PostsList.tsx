import React from 'react'
import IPost from '../../interfaces/post'
import PostsItem from './PostItem'
import IUser from '../../interfaces/user'
import { usePosts } from '../../hooks/usePosts'
import { useUsers } from '../../hooks/useUser'

interface Props {
  userId?: string
}

const PostsList: React.FunctionComponent<Props> = ({ userId }): any => {
  const { posts } = usePosts()

  const { getUserById } = useUsers()

  if (!posts) {
    return 'Загрузка...'
  }

  const user: IUser = getUserById(userId)

  const filteredPosts: IPost[] = user
    ? posts.filter((post: IPost) => post.userId === user._id)
    : posts

  return (
    <div className='posts'>
      {filteredPosts.map((post) => (
        <PostsItem key={post._id} {...post} />
      ))}
    </div>
  )
}

export default PostsList
