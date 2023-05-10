import { MouseEventHandler } from 'react'

export default interface IButton {
  onClick?: MouseEventHandler
  type?: string
}
