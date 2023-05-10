import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

const Avatar: React.FunctionComponent<ICommonComponent> = () => {
  return (
    <img
      className='avatar'
      src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
        .toString(36)
        .substring(7)}.svg`}
      alt=''
    />
  )
}

export default Avatar
