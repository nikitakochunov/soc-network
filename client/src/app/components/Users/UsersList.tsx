import React from 'react'
import IUser from '../../interfaces/user'
import Wrapper from '../common/Wrapper'
import UserCard from './UserCard'
import Divider from '../common/Divider'
import { useUsers } from '../../hooks/useUser'

const UsersList: React.FunctionComponent<{}> = (): any => {
  const { users } = useUsers()

  if (!users) {
    return 'Загрузка...'
  }

  return (
    <Wrapper>
      <div className='users-card-list'>
        {users.map((user: IUser, index: number) => {
          const isLast = index !== users.length - 1

          return (
            <>
              {!isLast ? <Divider /> : ''}
              <UserCard key={user._id} {...user} />
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default UsersList
