import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

const AuthContainer: React.FunctionComponent<ICommonComponent> = ({
  children,
}) => {
  return <div className='auth-container'>{children}</div>
}

export default AuthContainer
