import { ref, computed, onMounted } from 'vue'
import trainingData from '@/assets/TrainingSchedules/training2025-2026.json'

export const useTrainingData = () => {
  const trainings = ref([])
  const currentMonthKey = ref('')

  // Group trainings by month (only future trainings)
  const groupedTrainings = computed(() => {
    const grouped = {}
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Start of today
    
    trainings.value.forEach(training => {
      const trainingDate = new Date(training.date)
      trainingDate.setHours(0, 0, 0, 0) // Start of training day
      
      // Only include trainings that are today or in the future
      if (trainingDate >= today) {
        const monthKey = `${trainingDate.getFullYear()}-${String(trainingDate.getMonth() + 1).padStart(2, '0')}`
        
        if (!grouped[monthKey]) {
          grouped[monthKey] = []
        }
        
        grouped[monthKey].push(training)
      }
    })
    
    return grouped
  })

  // Initialize current month to first available month
  const availableMonths = computed(() => {
    return Object.keys(groupedTrainings.value).sort()
  })

  // Navigation controls
  const canGoPrevious = computed(() => {
    const currentIndex = availableMonths.value.indexOf(currentMonthKey.value)
    return currentIndex > 0
  })

  const canGoNext = computed(() => {
    const currentIndex = availableMonths.value.indexOf(currentMonthKey.value)
    return currentIndex < availableMonths.value.length - 1
  })

  const previousMonth = () => {
    const currentIndex = availableMonths.value.indexOf(currentMonthKey.value)
    if (currentIndex > 0) {
      currentMonthKey.value = availableMonths.value[currentIndex - 1]
    }
  }

  const nextMonth = () => {
    const currentIndex = availableMonths.value.indexOf(currentMonthKey.value)
    if (currentIndex < availableMonths.value.length - 1) {
      currentMonthKey.value = availableMonths.value[currentIndex + 1]
    }
  }

  const setCurrentMonth = (monthKey) => {
    currentMonthKey.value = monthKey
  }

  // Reset to initial month position
  const resetToInitialMonth = () => {
    const today = new Date()
    const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
    
    const available = Object.keys(groupedTrainings.value).sort()
    if (available.includes(currentMonth)) {
      currentMonthKey.value = currentMonth
    } else if (available.length > 0) {
      currentMonthKey.value = available[0]
    }
  }

  // Initialize data
  const initializeData = () => {
    trainings.value = trainingData
    
    // Set initial month to current month or first available month with future trainings
    const today = new Date()
    const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
    
    // Wait for groupedTrainings to be computed
    setTimeout(() => {
      const available = Object.keys(groupedTrainings.value).sort()
      if (available.includes(currentMonth)) {
        currentMonthKey.value = currentMonth
      } else if (available.length > 0) {
        // Start with the first month that has future trainings
        currentMonthKey.value = available[0]
      }
    }, 0)
  }

  return {
    trainings,
    currentMonthKey,
    groupedTrainings,
    availableMonths,
    canGoPrevious,
    canGoNext,
    previousMonth,
    nextMonth,
    setCurrentMonth,
    resetToInitialMonth,
    initializeData
  }
}
