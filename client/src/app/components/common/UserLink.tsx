import React from 'react'
import { Link } from 'react-router-dom'
import IUserLink from '../../interfaces/userLink'

const UserLink: React.FunctionComponent<IUserLink> = ({ to, text }) => {
  return (
    <Link className='user-link' to={to}>
      {text}
    </Link>
  )
}

export default UserLink
