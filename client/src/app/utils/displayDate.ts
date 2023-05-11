export default function displayDate(ms: number | string): string | undefined {
  const now = Date.now()
  const date = new Date(+ms)

  const difference = now - +ms
  const differenceInMin = difference / 1000 / 60
  const differenceInDays = differenceInMin / 60 / 24

  if (differenceInMin <= 1) {
    return '1 минуту назад'
  }

  if (differenceInMin <= 5) {
    return '5 минут назад'
  }

  if (differenceInMin <= 10) {
    return '10 минут назад'
  }

  if (differenceInMin <= 30) {
    return '30 минут назад'
  }

  if (differenceInMin > 30 && differenceInDays <= 1) {
    return (
      getTwoDigitNum(date.getHours()) + ':' + getTwoDigitNum(date.getMinutes())
    )
  }

  if (differenceInDays > 1 && differenceInDays <= 365) {
    return date.getDate() + ' ' + getMonthText(date.getMonth())
  }

  if (differenceInDays > 365) {
    return (
      date.getDate() +
      ' ' +
      getMonthText(date.getMonth()) +
      ' ' +
      date.getFullYear()
    )
  }
}

function getMonthText(month: number) {
  let text = ''

  switch (month) {
    case 0:
      text = 'Января'
      break
    case 1:
      text = 'Февраля'
      break

    case 2:
      text = 'Марта'
      break
    case 3:
      text = 'Апреля'
      break
    case 4:
      text = 'Мая'
      break
    case 5:
      text = 'Июня'
      break
    case 6:
      text = 'Июля'
      break
    case 7:
      text = 'Августа'
      break
    case 8:
      text = 'Сентября'
      break
    case 9:
      text = 'Октября'
      break
    case 10:
      text = 'Ноября'
      break
    case 11:
      text = 'Декабря'
      break
  }

  return text
}

function getTwoDigitNum(num: number): string | number {
  if (num < 10) {
    return '0' + num
  }
  return num
}
