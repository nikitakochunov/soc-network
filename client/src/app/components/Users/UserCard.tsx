import React from 'react'
import IUser from '../../interfaces/user'
import Button from '../common/Button'
import TextMuted from '../common/TextMuted'
import PhotoLink from '../common/PhotoLink'
import UserLink from '../common/UserLink'
import Avatar from '../common/Avatar'
import { useAuth } from '../../hooks/useAuth'
import { useUsers } from '../../hooks/useUser'
import FriendButton from '../common/FriendButton'

const UserCard: React.FunctionComponent<IUser> = ({
  _id,
  name,
  edu,
  image,
}) => {
  return (
    <div className='user-card'>
      <div className='user-card__item'>
        <div className='user-card__photo'>
          <PhotoLink to={'/users/' + _id}>
            <Avatar src={image} />
          </PhotoLink>
        </div>
      </div>
      <div className='user-card__item'>
        <div className='user-card__info user-info'>
          <div className='user-info__item'>
            <div className='user-info__name'>
              <UserLink to={'/users/' + _id} text={name} />
            </div>
          </div>
          <div className='user-info__item'>
            <div className='user-info__edu'>
              <TextMuted>{edu}</TextMuted>
            </div>
          </div>
          <div className='user-info__item'>
            <FriendButton userId={_id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
