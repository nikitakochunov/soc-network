import React, { useState } from 'react'
import Wrapper from '../common/Wrapper'
import Button from '../common/Button'
import Avatar from '../common/Avatar'
import { PostsProvider, usePosts } from '../../hooks/usePosts'

const AddPostForm = () => {
  const [data, setData] = useState('')

  const { createPost } = usePosts()

  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData((prevState) => e.target.value)

    if (!isFocused) {
      setIsFocused(true)
    }

    if (e.target.value === '') {
      setIsFocused(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(data)
    createPost({ value: data })
    // setData('')
  }

  return (
    <Wrapper>
      <div className='add-post'>
        <div className='add-post__item'>
          <div className='add-post__author-photo'>
            <Avatar />
          </div>
        </div>
        <div className='add-post__item add-post-form'>
          <form onSubmit={handleSubmit}>
            <textarea
              className='add-post__textarea'
              name='add-post'
              value={data}
              id='add-post'
              placeholder='Что у вас нового?'
              onChange={handleChange}
            />

            {isFocused ? (
              <Button onClick={handleSubmit}>Опубликовать</Button>
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default AddPostForm
