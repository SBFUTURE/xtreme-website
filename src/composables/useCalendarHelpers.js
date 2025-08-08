// Calendar-specific helper functions
export const useCalendarHelpers = () => {
  // Calendar helper functions
  const getEmptyDaysAtStart = (monthKey) => {
    const [year, month] = monthKey.split('-')
    const firstDay = new Date(year, month - 1, 1)
    const dayOfWeek = firstDay.getDay()
    // Convert Sunday (0) to 7, then subtract 1 to get Monday as 0
    return dayOfWeek === 0 ? 6 : dayOfWeek - 1
  }

  const getEmptyDaysAtEnd = (monthKey) => {
    const [year, month] = monthKey.split('-')
    const lastDay = new Date(year, month, 0)
    const totalDays = lastDay.getDate()
    const emptyAtStart = getEmptyDaysAtStart(monthKey)
    const totalCells = Math.ceil((totalDays + emptyAtStart) / 7) * 7
    return totalCells - totalDays - emptyAtStart
  }

  const getDaysInMonth = (monthKey) => {
    const [year, month] = monthKey.split('-')
    const lastDay = new Date(year, month, 0)
    return Array.from({ length: lastDay.getDate() }, (_, i) => i + 1)
  }

  const getTrainingsForDay = (monthKey, day, groupedTrainings) => {
    const [year, month] = monthKey.split('-')
    const dateString = `${year}-${month.padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return groupedTrainings[monthKey]?.filter(training => 
      training.date === dateString
    ) || []
  }

  // Check if a day is today
  const isToday = (monthKey, day) => {
    const [year, month] = monthKey.split('-')
    const today = new Date()
    const checkDate = new Date(year, month - 1, day)
    
    return today.getFullYear() === checkDate.getFullYear() &&
           today.getMonth() === checkDate.getMonth() &&
           today.getDate() === checkDate.getDate()
  }

  // Check if a day is in the past
  const isPastDay = (monthKey, day) => {
    const [year, month] = monthKey.split('-')
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const checkDate = new Date(year, month - 1, day)
    checkDate.setHours(0, 0, 0, 0)
    
    return checkDate < today
  }

  return {
    getEmptyDaysAtStart,
    getEmptyDaysAtEnd,
    getDaysInMonth,
    getTrainingsForDay,
    isToday,
    isPastDay
  }
}
