export default interface ITextField {
  label: string
  type: string
  name: string
  value: string
  onChange: Function
  error?: string | undefined
  enterError?: string | null
  isValid?: boolean
  autoFocus?: boolean
}
