import React, { createContext, useContext, useEffect, useState } from 'react'
import userService from '../services/user.service'
import { useAuth } from './useAuth'

const UserContext = createContext()

export const useUsers = () => {
  return useContext(UserContext)
}

const UserProvider = ({ children }) => {
  const { currentUser } = useAuth()

  const [users, setUsers] = useState([])

  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const newUsers = [...users]
      const userIndex = newUsers.findIndex(
        (user) => user._id === currentUser._id
      )
      newUsers[userIndex] = currentUser
      setUsers(newUsers)
    }
  }, [currentUser])

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  const getUsers = async () => {
    try {
      const { content } = await userService.get()
      setUsers(content)
      setLoading(false)
    } catch (error) {
      catchError(error)
    }
  }

  const getUserFriends = (user) => {
    return user.friends ? users.filter((u) => user.friends.includes(u._id)) : []
  }

  const getUserById = (id) => {
    return users.find((user) => user._id === id)
  }

  const updateUsers = (data) => {
    const newUsers = [...users]
    const index = newUsers.findIndex((u) => u._id === data._id)

    newUsers[index] = data

    setUsers(newUsers)
  }

  const addFriend = async (id) => {
    try {
      const currentFriends = currentUser.friends ? [...currentUser.friends] : []

      const newFriends = !currentFriends.includes(id)
        ? [...currentFriends, id]
        : currentFriends

      const { content } = await userService.update({
        ...currentUser,
        friends: newFriends,
      })

      updateUsers(content)
    } catch (error) {
      catchError(error)
    }
  }

  const deleteFriend = async (id) => {
    try {
      const currentFriends = [...currentUser.friends]
      const newFriends = currentFriends.filter((fId) => fId !== id)

      const { content } = await userService.update({
        ...currentUser,
        friends: newFriends || [],
      })

      updateUsers(content)
    } catch (error) {
      catchError(error)
    }
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <UserContext.Provider
      value={{ users, getUserById, getUserFriends, addFriend, deleteFriend }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
