import React, { useEffect } from 'react'
import IUser from '../../interfaces/user'
import Wrapper from '../common/Wrapper'
import UserCard from './UserCard'
import Divider from '../common/Divider'

interface Props {
  users: IUser[]
}

const UsersList: React.FunctionComponent<Props> = ({ users }): any => {
  return (
    <Wrapper>
      <div className='users-card-list'>
        {users.map((user: IUser, index: number) => {
          const isFirst = index === 0

          return (
            <>
              {!isFirst ? <Divider /> : ''}
              <UserCard key={user._id} {...user} />
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default UsersList
