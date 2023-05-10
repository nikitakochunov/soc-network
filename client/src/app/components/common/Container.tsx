import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

const Container: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  return <div className='container'>{children}</div>
}

export default Container
