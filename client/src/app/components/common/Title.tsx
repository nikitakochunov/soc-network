import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

const Title: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  return <h2 className='title'>{children}</h2>
}

export default Title
