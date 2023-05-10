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

  const getUserById = (id) => {
    return users.find((user) => user._id === id)
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  return (
    <UserContext.Provider value={{ users, getUserById }}>
      {!isLoading ? children : 'Загрузка...'}
    </UserContext.Provider>
  )
}

export default UserProvider
