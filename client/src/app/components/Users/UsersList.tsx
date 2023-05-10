import React from 'react'
import IUser from '../../interfaces/user'
import Wrapper from '../common/Wrapper'
import UserCard from './UserCard'
import Divider from '../common/Divider'

const UsersList: React.FunctionComponent<{}> = () => {
  const users: IUser[] = [
    {
      id: '123',
      name: 'Nikita Kochunov',
      edu: 'СПбГМТУ (бывш. ЛКИ)',
      city: 'Санкт-Петербург',
      createdAt: '123',
    },
    {
      id: '124',
      name: 'Petr Petrov',
      edu: 'МГУ',
      city: 'Москва',
      createdAt: '123',
    },
  ]

  return (
    <Wrapper>
      <div className='users-card-list'>
        {users.map((user, index) => {
          const isLast = index !== users.length - 1

          return (
            <>
              {!isLast ? <Divider /> : ''}
              <UserCard key={user.id} {...user} />
            </>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default UsersList
