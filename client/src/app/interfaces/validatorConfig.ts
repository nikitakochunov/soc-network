import IValidatorField from './validatorField'

export default interface IValidatorConfig {
  isRequired?: IValidatorField
  isEmail?: IValidatorField
  isCapitalSymbol?: IValidatorField
  isDigitSymbol?: IValidatorField
  isMinLength?: IValidatorField
}
