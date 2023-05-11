export default function sortByName(array: any[]): any[] {
  return array.sort((a: any, b: any) => {
    if (a.name > b.name) {
      return 1
    } else {
      return -1
    }
  })
}
