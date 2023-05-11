import React from 'react'
import ProfileInfo from '../components/ProfileInfo'
import Page from '../components/common/Page'
import { useUsers } from '../hooks/useUser'
import IUser from '../interfaces/user'
import Wrapper from '../components/common/Wrapper'
import Posts from '../components/Posts/Posts'
import IPost from '../interfaces/post'
import { usePosts } from '../hooks/usePosts'

interface Props {
  userId: string
}

const UserPage: React.FunctionComponent<Props> = ({ userId }): any => {
  const { getUserById } = useUsers()

  const user: IUser = getUserById(userId)

  const { posts } = usePosts()

  if (!user) {
    return (
      <Page title='Пользователь'>
        <Wrapper>
          <div>Пользователь с таким id не найден</div>
        </Wrapper>
      </Page>
    )
  }

  const filteredPosts: IPost[] = userId
    ? posts.filter((post: IPost) => post.userId === userId)
    : posts

  return (
    <Page title={user.name}>
      <ProfileInfo userId={userId} />
      <Posts posts={filteredPosts} />
    </Page>
  )
}

export default UserPage
