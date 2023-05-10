import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'
import IButton from '../../interfaces/button'

const Button: React.FunctionComponent<ICommonComponent & IButton> = ({
  children,
  onClick,
}) => {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  )
}

export default Button
