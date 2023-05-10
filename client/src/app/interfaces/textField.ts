export default interface ITextField {
  label: string
  type: string
  name: string
  value: string
  onChange: Function
  error?: string
  isValid?: boolean
  autoFocus?: boolean
}
