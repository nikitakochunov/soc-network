import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import userService from '../services/user.service'
import localStorageService, {
  setTokens,
} from '../services/localStorage.service'
import { useHistory } from 'react-router-dom'

const AuthContext = React.createContext()

export const httpAuth = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/',
  params: {
    // key: process.env.REACT_APP_FIREBASE_KEY,
    key: 'AIzaSyDKgrE4561N5DWzzQJBGg5w6NCZ7M2_P5c',
  },
})

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const history = useHistory()

  const [currentUser, setCurrentUser] = useState()
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const signUp = async ({ email, password, ...rest }) => {
    try {
      const { data } = await httpAuth.post('accounts:signUp', {
        email,
        password,
        returnSecureToken: true,
      })

      setTokens(data)

      await createUser({
        _id: data.localId,
        email,
        image: `https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1)
          .toString(36)
          .substring(7)}.svg`,
        ...rest,
      })
      return data
    } catch (error) {
      catchError(error)
      const { code, message } = error.response.data.error

      if (code === 400) {
        if (message === 'EMAIL_EXISTS') {
          const errorObject = {
            email: 'Пользователь с таким email уже существует',
          }

          throw errorObject
        }
      }
    }
  }

  const logIn = async ({ email, password }) => {
    try {
      const { data } = await httpAuth.post('accounts:signInWithPassword', {
        email,
        password,
        returnSecureToken: true,
      })

      setTokens(data)

      await getUserData()

      return data
    } catch (error) {
      catchError(error)
      const { code, message } = error.response.data.error
      if (code === 400) {
        if (['INVALID_PASSWORD', 'EMAIL_NOT_FOUND'].includes(message)) {
          throw new Error('Неверный email или пароль')
        } else {
          throw new Error('Слишком много попыток, попробуйте позже')
        }
      }
    }
  }

  const logOut = () => {
    localStorageService.removeTokens()
    setCurrentUser(null)
    history.push('/')
  }

  const createUser = async (data) => {
    try {
      const { content } = await userService.create(data)
      setCurrentUser(content)
      return content
    } catch (error) {
      catchError(error)
    }
  }

  const updateUserData = async (data) => {
    try {
      const { content } = await userService.update(data)
      setCurrentUser(content)
      return content
    } catch (error) {
      catchError(error)
    }
  }

  const catchError = (error) => {
    const { message } = error.response.data
    setError(message)
  }

  const getUserData = async () => {
    try {
      const { content } = await userService.getCurrentUser()
      setCurrentUser(content)
    } catch (error) {
      catchError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (localStorageService.getAccessToken()) {
      getUserData()
    } else {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    if (error !== null) {
      setError(null)
    }
  }, [error])

  return (
    <AuthContext.Provider
      value={{ signUp, logIn, logOut, currentUser, updateUserData }}
    >
      {!isLoading ? children : 'Загрузка...'}
    </AuthContext.Provider>
  )
}
