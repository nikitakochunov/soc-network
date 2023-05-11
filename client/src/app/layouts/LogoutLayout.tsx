import React, { useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { Redirect } from 'react-router-dom'

const LogoutLayout = () => {
  const { logOut } = useAuth()

  useEffect(() => {
    logOut()
  }, [])

  return <Redirect to='/auth' />
}

export default LogoutLayout
