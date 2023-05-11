import React from 'react'
import ITextField from '../../../interfaces/textField'

const TextField: React.FunctionComponent<ITextField> = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  enterError,
  isValid,
  autoFocus,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ name: e.target.name, value: e.target.value })
  }

  const getValidation = () => {
    if (error || enterError) {
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
