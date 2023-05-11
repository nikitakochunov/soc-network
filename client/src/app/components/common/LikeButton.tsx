import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useUsers } from '../../hooks/useUser'
import { useAuth } from '../../hooks/useAuth'
import likeIcon from '../../../svg/heart-regular.svg'
import likeSolidIcon from '../../../svg/heart-solid.svg'
import { usePosts } from '../../hooks/usePosts'

interface Props {
  postId: string
  count: number
}

const LikeButton: React.FunctionComponent<Props> = ({ postId, count }): any => {
  const [likesCount, setLikesCount] = useState<number>(count)
  const [isLiked, setIsLiked] = useState<boolean>()

  const { currentUser } = useAuth()

  useEffect(() => {
    const isAlreadyLiked = currentUser.likes
      ? currentUser.likes.includes(postId)
      : false

    setIsLiked(isAlreadyLiked)
  }, [])

  const { addLike, deleteLike } = useUsers()
  const { addPostLike, deletePostLike } = usePosts()

  const toggleLike = () => {
    if (isLiked) {
      deleteLike(postId)
      deletePostLike({ postId, userId: currentUser._id })
      setLikesCount((prevState) => prevState - 1)
    } else {
      addLike(postId)
      addPostLike({ postId, userId: currentUser._id })
      setLikesCount((prevState) => prevState + 1)
    }

    setIsLiked((prevState) => !prevState)
  }

  return (
    <Button onClick={toggleLike}>
      <div className='post-likes__button post-likes-button'>
        <img
          className='post-likes__icon icon'
          src={isLiked ? likeSolidIcon : likeIcon}
          alt=''
        />
        <div className='post-likes__number'>{String(likesCount)}</div>
      </div>
    </Button>
  )
}

export default LikeButton
