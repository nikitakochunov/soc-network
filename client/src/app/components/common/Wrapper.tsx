import React from 'react'

import ICommonComponent from '../../interfaces/commonComponent'

const Wrapper: React.FunctionComponent<ICommonComponent> = ({ children }) => {
  return <div className='block-wrapper'>{children}</div>
}

export default Wrapper
