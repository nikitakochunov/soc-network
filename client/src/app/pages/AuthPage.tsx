import React, { useState } from 'react'
import Wrapper from '../components/common/Wrapper'
import RegisterForm from '../components/Auth/RegisterForm'
import Title from '../components/common/Title'
import LoginForm from '../components/Auth/LoginForm'
import AuthContainer from '../components/common/AuthContainer'

const AuthPage: React.FunctionComponent<{}> = () => {
  const [type, setType] = useState<string>('login')

  const toggleType = () => {
    setType((prevState) => (prevState === 'login' ? 'signup' : 'login'))
  }

  return (
    <div className='auth-page'>
      <AuthContainer>
        <Wrapper>
          {type === 'login' ? (
            <>
              <div className='auth__title'>
                <Title>Вход</Title>
              </div>
              <LoginForm />
              <div className='auth__text'>
                <p>
                  У вас еще нет аккаунта?
                  <a className='link' role='button' onClick={toggleType}>
                    Зарегистироваться!
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className='auth__title'>
                <Title>Регистрация</Title>
              </div>
              <RegisterForm />
              <div className='auth__text'>
                <p>
                  У вас уже есть аккаунт?{' '}
                  <a className='link' role='button' onClick={toggleType}>
                    Войти!
                  </a>
                </p>
              </div>
            </>
          )}
        </Wrapper>
      </AuthContainer>
    </div>
  )
}

export default AuthPage
