import React, { useState } from 'react'
import TextField from '../common/form/TextField'
import IFormTarget from '../../interfaces/formTarget'
import { validator } from '../../utils/validator'
import Button from '../common/Button'
import { useAuth } from '../../hooks/useAuth'

interface IRegister {
  email: string
  password: string
}

const INITIAL_STATE = {
  email: '',
  password: '',
}

const LoginForm: React.FunctionComponent = () => {
  const [data, setData] = useState<IRegister>(INITIAL_STATE)

  const [errors, setErrors] = useState<IRegister & object>(INITIAL_STATE)
  const [validFields, setValidFields] = useState<string[]>([])

  const [enterError, setEnterError] = useState<string | null>(null)

  const { logIn } = useAuth()

  const handleChange = (target: IFormTarget) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))

    setErrors((prevState) => ({
      ...prevState,
      [target.name]: '',
    }))

    setValidFields((prevState) =>
      prevState.filter((field) => field !== target.name)
    )

    setEnterError(null)
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: { message: 'Электронная почта введена некорректно' },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
    },
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)

    setErrors(errors)

    const errorFields: string[] = Object.keys(errors)

    const validFields = Object.keys(data).filter(
      (key) => !errorFields.includes(key)
    )

    setValidFields(validFields)

    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    try {
      await logIn(data)
    } catch (error: any) {
      setEnterError(error.message)
      setValidFields([])
    }
  }

  const isValidField = (field: string): boolean => {
    return validFields.includes(field)
  }

  return (
    <form onSubmit={handleSubmit} className='form' noValidate>
      <TextField
        label='Электронная почта'
        name='email'
        type='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
        enterError={enterError}
        isValid={isValidField('email')}
        autoFocus
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
        enterError={enterError}
        isValid={isValidField('password')}
      />
      {enterError && <p className='enter-error'>{enterError}</p>}
      <Button type='submit' onClick={handleSubmit}>
        Отправить
      </Button>
    </form>
  )
}

export default LoginForm
