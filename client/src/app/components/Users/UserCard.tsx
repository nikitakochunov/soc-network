import React from 'react'
import IUser from '../../interfaces/user'
import Button from '../common/Button'
import TextMuted from '../common/TextMuted'
import { Link } from 'react-router-dom'
import PhotoLink from '../common/PhotoLink'
import UserLink from '../common/UserLink'
import Avatar from '../common/Avatar'

const UserCard: React.FunctionComponent<IUser> = ({ id, name, edu }) => {
  return (
    <div className='user-card'>
      <div className='user-card__item'>
        <div className='user-card__photo'>
          <PhotoLink to={'/users/' + id}>
            <Avatar />
          </PhotoLink>
        </div>
      </div>
      <div className='user-card__item'>
        <div className='user-card__info user-info'>
          <div className='user-info__item'>
            <div className='user-info__name'>
              <UserLink to={'/users/' + id} text={name} />
            </div>
          </div>
          <div className='user-info__item'>
            <div className='user-info__edu'>
              <TextMuted>{edu}</TextMuted>
            </div>
          </div>
          <div className='user-info__item'>
            <Button>Добавить в друзья</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard
