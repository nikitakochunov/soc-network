import React from 'react'
import ICommonComponent from '../../interfaces/commonComponent'

const TextMuted: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  return <span className='text-muted'>{children}</span>
}

export default TextMuted
