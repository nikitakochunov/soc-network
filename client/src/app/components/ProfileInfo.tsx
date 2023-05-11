import React from 'react'
import Title from './common/Title'
import TextMuted from './common/TextMuted'
import Wrapper from './common/Wrapper'
import Button from './common/Button'
import Avatar from './common/Avatar'
import { useAuth } from '../hooks/useAuth'
import { useUsers } from '../hooks/useUser'
import IUser from '../interfaces/user'
import FriendButton from './common/FriendButton'

interface Props {
  userId: string
}

const ProfileInfo: React.FunctionComponent<Props> = ({ userId }): any => {
  const { getUserById } = useUsers()

  const user: IUser = getUserById(userId)

  if (!user) {
    return 'Загрузка...'
  }

  return (
    <Wrapper>
      <div className='profile'>
        <div className='profile__item'>
          <div className='profile-photo'>
            <Avatar src={user.image} />
          </div>
        </div>
        <div className='profile__item'>
          <div className='profile-info'>
            <div className='profile-info__item'>
              <div>
                <Title>{user.name}</Title>
              </div>
              {/* <div className='profile-info-text'>
                <TextMuted>22 года</TextMuted>
              </div> */}
            </div>
            <div className='profile-info__item'>
              <ul className='info-list'>
                <ul className='info-list__item'>{user.city}</ul>
                <ul className='info-list__item'>{user.edu}</ul>
              </ul>
            </div>
          </div>
        </div>
        <div className='profile__item'>
          <FriendButton userId={userId} />
        </div>
      </div>
    </Wrapper>
  )
}

export default ProfileInfo
