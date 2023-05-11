import React from 'react'
import { Link } from 'react-router-dom'
import ILink from '../interfaces/link'
import { useAuth } from '../hooks/useAuth'

const Sidebar: React.FunctionComponent<{}> = () => {
  const { currentUser } = useAuth()

  const links: ILink[] = [
    {
      to: '/users/' + currentUser._id,
      text: 'Моя страница',
    },
    {
      to: '/feed',
      text: 'Новости',
    },
    {
      to: '/friends',
      text: 'Друзья',
    },
  ]

  return (
    <div>
      <ul className='sidebar__list'>
        {links.map((link, index) => (
          <li key={index} className='sidebar__item'>
            <Link className='sidebar__link' to={link.to}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
