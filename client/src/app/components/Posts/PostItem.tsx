import React, { MouseEventHandler, useState } from 'react'
import IPost from '../../interfaces/post'
import Wrapper from '../common/Wrapper'
import TextMuted from '../common/TextMuted'
import likeIcon from '../../../svg/heart-regular.svg'
import likeSolidIcon from '../../../svg/heart-solid.svg'
import Button from '../common/Button'
import UserLink from '../common/UserLink'
import Avatar from '../common/Avatar'
import { useUsers } from '../../hooks/useUser'
import IUser from '../../interfaces/user'
import { useAuth } from '../../hooks/useAuth'
import displayDate from '../../utils/displayDate'

const PostsItem: React.FunctionComponent<IPost> = ({
  _id,
  userId,
  value,
  likes,
  createdAt,
}) => {
  const { currentUser } = useAuth()

  const [isLiked, setIsLiked] = useState<boolean>(
    likes.includes(currentUser._id)
  )

  const { getUserById } = useUsers()
  const user: IUser = getUserById(userId)

  const toggleLike = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setIsLiked((prevState) => !prevState)
  }

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
                <TextMuted>{displayDate(createdAt)}</TextMuted>
              </div>
            </div>
          </div>
          <div className='post__body post-body'>{value}</div>
          <div className='post__footer post-footer'>
            <div className='post-footer__item post-likes'>
              <Button onClick={toggleLike}>
                <div className='post-likes__button post-likes-button'>
                  <img
                    className='post-likes__icon icon'
                    src={isLiked ? likeSolidIcon : likeIcon}
                    alt=''
                  />
                  <div className='post-likes__number'>{likes.length}</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default PostsItem
