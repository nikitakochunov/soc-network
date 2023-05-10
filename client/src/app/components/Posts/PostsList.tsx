import React from 'react'
import Wrapper from '../common/Wrapper'
import IPost from '../../interfaces/post'
import PostsItem from './PostItem'

const PostsList: React.FunctionComponent<{}> = () => {
  const posts: IPost[] = [
    {
      id: '1',
      author: 'Nikita Kochunov',
      likes: '10',
      value: 'Теперь все посты переехали в паблик',
      createdAt: '10 May',
    },
    {
      id: '2',
      author: 'Karina Kochunov',
      likes: '10',
      value: 'Теперь все посты переехали в паблик',
      createdAt: '10 May',
    },
  ]

  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostsItem key={post.id} {...post} />
      ))}
    </div>
  )
}

export default PostsList
