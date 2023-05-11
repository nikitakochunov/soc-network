import React, { useState } from 'react'
import IPost from '../../interfaces/post'
import Wrapper from '../common/Wrapper'
import TextMuted from '../common/TextMuted'
import Button from '../common/Button'
import UserLink from '../common/UserLink'
import Avatar from '../common/Avatar'
import { useUsers } from '../../hooks/useUser'
import IUser from '../../interfaces/user'
import { useAuth } from '../../hooks/useAuth'
import displayDate from '../../utils/displayDate'
import LikeButton from '../common/LikeButton'

const PostsItem: React.FunctionComponent<IPost> = ({
  _id,
  userId,
  value,
  likes,
  created_at,
}) => {
  const { currentUser } = useAuth()

  const userLikes = likes ? likes : []

  const { getUserById } = useUsers()
  const user: IUser = getUserById(userId)

  return (
    <div className='posts__item'>
      <Wrapper>
        <div className='post'>
          <div className='post__header post-header'>
            <div className='post-header__photo'>
              <Avatar src={user.image} />
            </div>
            <div className='post-header__info post-header-info'>
              <div className='post-header-info__author'>
                <UserLink text={user.name} to={'/users/' + user._id} />
              </div>
              <div className='post-header-info__date'>
                <TextMuted>{displayDate(created_at)}</TextMuted>
              </div>
            </div>
          </div>
          <div className='post__body post-body'>{value}</div>
          <div className='post__footer post-footer'>
            <div className='post-footer__item post-likes'>
              <LikeButton postId={_id} count={userLikes.length} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default PostsItem
