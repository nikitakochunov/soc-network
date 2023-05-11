import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

interface Props {
  src: string
}

const Avatar: React.FunctionComponent<ICommonComponent & Props> = ({ src }) => {
  return <img className='avatar' src={src} alt='' />
}

export default Avatar
