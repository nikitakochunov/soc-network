export default function sortByCreatedAt(array: any[]): any[] {
  return array.sort((a, b) => {
    return +b.created_at - +a.created_at
  })
}
