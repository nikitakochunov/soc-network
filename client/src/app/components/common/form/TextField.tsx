import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ITextField from '../../../interfaces/textField'

const TextField: React.FunctionComponent<ITextField> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  isValid,
  autoFocus,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: e.target.name, value: e.target.value })
  }

  const getInputClasses = () => {
    return ''
  }

  const getValidation = () => {
    if (error) {
      return 'form-input__item_invalid'
    }
    if (isValid) return 'form-input__item_valid'

    return ''
  }

  return (
    <div className='form__item'>
      <label className='form-label' htmlFor={name}>
        {label}
      </label>
      <div className='form-input'>
        <input
          className={'form-input__item ' + getValidation()}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          autoFocus={autoFocus}
        />
        {error && <div className='form-input__feedback'>{error}</div>}
      </div>
    </div>
  )
}

export default React.memo(TextField)
