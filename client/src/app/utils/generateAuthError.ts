export function generateAuthError(message: string): string {
  switch (message) {
    case 'INVALID_PASSWORD':
      return 'Неверный email или пароль'
    case 'EMAIL_NOT_FOUND':
      return 'Неверный email или пароль'
    case 'EMAIL_EXISTS':
      return 'Пользователь с таким email уже существует'
    default:
      return 'Слишком много попыток, попробуйте позже'
  }
}
