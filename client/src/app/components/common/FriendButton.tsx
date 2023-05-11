import React, { useEffect, useState } from 'react'
import Button from './Button'
import { useUsers } from '../../hooks/useUser'
import { useAuth } from '../../hooks/useAuth'
import IUser from '../../interfaces/user'

interface Props {
  userId: string
}

const FriendButton: React.FunctionComponent<Props> = ({ userId }): any => {
  const [isFriend, setIsFriend] = useState<boolean>()

  useEffect(() => {
    const isAlreadyFriend = currentUser.friends
      ? currentUser.friends.includes(userId)
      : false

    setIsFriend(isAlreadyFriend)
  }, [])

  const { currentUser } = useAuth()

  const { addFriend, deleteFriend } = useUsers()

  if (currentUser._id === userId) {
    return ''
  }

  const handleAddFriend = () => {
    addFriend(userId)
    setIsFriend((prevState) => !prevState)
    return userId
  }

  const handleDeleteFriend = () => {
    deleteFriend(userId)
    setIsFriend((prevState) => !prevState)
    return userId
  }

  if (isFriend) {
    return <Button onClick={handleDeleteFriend}>Удалить из друзей</Button>
  }

  return <Button onClick={handleAddFriend}>Добавить в друзья</Button>
}

export default FriendButton
