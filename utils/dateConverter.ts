export const formatDate = (date: string): string => {
  const d = new Date(date)
  const day = d.getDay()
  const month = d.getMonth()
  const years = d.getFullYear()
  return `${day}-${month}-${years}`
}
