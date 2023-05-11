import React from 'react'
import PostsItem from './PostItem'
import IPost from '../../interfaces/post'
import { usePosts } from '../../hooks/usePosts'

const PostsList: React.FunctionComponent<{}> = (): any => {
  const { posts } = usePosts()

  return (
    <div className='posts'>
      {posts.map((post: IPost) => (
        <PostsItem key={post._id} {...post} />
      ))}
    </div>
  )
}

export default PostsList
