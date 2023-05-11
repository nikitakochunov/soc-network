import React from 'react'
import PostsItem from './PostItem'
import IPost from '../../interfaces/post'
import sortByCreatedAt from '../../utils/sortByDate'

interface Props {
  posts: IPost[]
}

const PostsList: React.FunctionComponent<Props> = ({ posts }) => {
  const sortedPosts: IPost[] = sortByCreatedAt(posts)

  return (
    <div className='posts'>
      {sortedPosts.map((post: IPost) => (
        <PostsItem key={post._id} {...post} />
      ))}
    </div>
  )
}

export default PostsList
