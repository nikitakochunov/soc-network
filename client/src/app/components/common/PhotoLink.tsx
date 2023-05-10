import React from 'react'
import { Link } from 'react-router-dom'
import IPhotoLink from '../../interfaces/photoLink'
import ICommonComponent from '../../interfaces/commonComponent'

const PhotoLink: React.FunctionComponent<IPhotoLink & ICommonComponent> = ({
  to,
  children,
}) => {
  return (
    <Link className='photo-link' to={to}>
      {children}
    </Link>
  )
}

export default PhotoLink
