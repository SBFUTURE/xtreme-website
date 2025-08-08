// Utility functions for training data formatting and display
export const useTrainingUtils = () => {
  // Format month name
  const formatMonthName = (monthKey) => {
    const [year, month] = monthKey.split('-')
    const date = new Date(year, month - 1)
    return date.toLocaleDateString('nl-NL', { month: 'long', year: 'numeric' })
  }

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('nl-NL', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }

  // Format day number
  const formatDay = (dateString) => {
    const date = new Date(dateString)
    return date.getDate()
  }

  return {
    formatMonthName,
    formatDate,
    formatDay
  }
}
