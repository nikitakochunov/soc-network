import React, { useEffect } from 'react'
import IPage from '../../interfaces/page'

const Page: React.FunctionComponent<IPage> = ({ children, title }) => {
  const $title: HTMLTitleElement | null = document.querySelector('title')

  useEffect(() => {
    $title!.text = title
  }, [title])

  const pageChildren = React.Children.map(children, (child) => {
    return <div className='page__item'>{child}</div>
  })

  return <div className='page'>{pageChildren}</div>
}

export default Page
