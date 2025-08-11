<template>
  <div class="space-y-6">
    <!-- Desktop Week/Month Toggle (only visible on desktop) -->
    <CalendarViewToggle 
      v-model="calendarViewMode" 
      @update:modelValue="handleCalendarViewChange"
    />

    <!-- Mobile/Tablet: Always Week View -->
    <div class="lg:hidden">
      <!-- Month/Year Header with navigation (like month view) -->
      <div class="flex items-center justify-between mb-6">
        <button 
          @click="previousWeek"
          :disabled="!canGoPreviousWeek"
          class="p-2 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
          <svg class="w-5 h-5 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <h2 class="text-2xl sm:text-3xl font-heading font-bold text-xtreme-yellow">
          {{ currentMonthYear }}
        </h2>
        
        <button 
          @click="nextWeek"
          :disabled="!canGoNextWeek"
          class="p-2 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
          <svg class="w-5 h-5 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <!-- Week Range -->
      <div class="text-center mb-4">
        <h3 class="text-base font-medium text-gray-300">
          {{ currentWeekRange }}
        </h3>
      </div>

      <!-- Week View for Mobile -->
      <transition name="slide" mode="out-in">
        <div :key="currentWeekStart" class="calendar-week">
          <WeekView
            :current-week-start="currentWeekStart"
            :grouped-trainings="groupedTrainings"
            :can-go-previous="canGoPreviousWeek"
            :can-go-next="canGoNextWeek"
            :show-header="false"
            @previous-week="previousWeek"
            @next-week="nextWeek"
          />
        </div>
      </transition>
    </div>

    <!-- Desktop: Week or Month View -->
    <div class="hidden lg:block">
      <!-- Week View for Desktop -->
      <div v-if="calendarViewMode === 'week'">
        <!-- Month/Year Header with navigation (like month view) -->
        <div class="flex items-center justify-between mb-6">
          <button 
            @click="previousWeek"
            :disabled="!canGoPreviousWeek"
            class="p-3 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            <svg class="w-6 h-6 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          <h2 class="text-3xl font-heading font-bold text-xtreme-yellow">
            {{ currentMonthYear }}
          </h2>
          
          <button 
            @click="nextWeek"
            :disabled="!canGoNextWeek"
            class="p-3 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
            <svg class="w-6 h-6 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <!-- Week Range -->
        <div class="text-center mb-6">
          <h3 class="text-lg font-medium text-gray-300">
            {{ currentWeekRange }}
          </h3>
        </div>

        <transition name="slide" mode="out-in">
          <div :key="currentWeekStart" class="calendar-week">
            <WeekView
              :current-week-start="currentWeekStart"
              :grouped-trainings="groupedTrainings"
              :can-go-previous="canGoPreviousWeek"
              :can-go-next="canGoNextWeek"
              :show-header="false"
              @previous-week="previousWeek"
              @next-week="nextWeek"
            />
          </div>
        </transition>
      </div>

      <!-- Month View for Desktop -->
      <div v-else>
        <!-- Calendar Navigation -->
        <CalendarNavigation
          :current-month-key="currentMonthKey"
          :can-go-previous="canGoPrevious"
          :can-go-next="canGoNext"
          @previous-month="$emit('previousMonth')"
          @next-month="$emit('nextMonth')"
        />

        <!-- Single Calendar Grid with Transition -->
        <div class="calendar-slider-container mt-6">
          <transition name="slide" mode="out-in">
            <div :key="currentMonthKey" class="calendar-month">
              <CalendarGrid
                :current-month-key="currentMonthKey"
                :grouped-trainings="groupedTrainings"
              />
            </div>
          </transition>
        </div>

        <!-- Month Indicator Dots -->
        <CalendarDots
          :grouped-trainings="groupedTrainings"
          :current-month-key="currentMonthKey"
          @month-selected="$emit('monthSelected', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import CalendarNavigation from './CalendarNavigation.vue'
import CalendarGrid from './CalendarGrid.vue'
import CalendarDots from './CalendarDots.vue'
import WeekView from './WeekView.vue'
import CalendarViewToggle from './CalendarViewToggle.vue'

export default {
  name: 'TrainingCalendarView',
  
  components: {
    CalendarNavigation,
    CalendarGrid,
    CalendarDots,
    WeekView,
    CalendarViewToggle
  },

  props: {
    currentMonthKey: String,
    groupedTrainings: Object,
    canGoPrevious: Boolean,
    canGoNext: Boolean
  },

  emits: ['previousMonth', 'nextMonth', 'monthSelected'],

  setup(props, { emit }) {
    // Desktop calendar view mode (week or month)
    const calendarViewMode = ref('month')
    
    // Week navigation state
    const currentWeekStart = ref('')
    const canGoPreviousWeek = ref(false)
    const canGoNextWeek = ref(false)

    // Initialize week view
    const initializeWeekView = () => {
      // Find the first week that has trainings
      const firstTrainingDate = getFirstTrainingDate()
      if (firstTrainingDate) {
        const monday = getMonday(new Date(firstTrainingDate))
        currentWeekStart.value = monday.toISOString().split('T')[0]
      } else {
        // Fallback to current week
        const today = new Date()
        const monday = getMonday(today)
        currentWeekStart.value = monday.toISOString().split('T')[0]
      }
      updateWeekNavigation()
    }

    const getFirstTrainingDate = () => {
      if (!props.groupedTrainings) return null
      
      let earliestDate = null
      for (const monthKey in props.groupedTrainings) {
        const monthTrainings = props.groupedTrainings[monthKey]
        if (Array.isArray(monthTrainings)) {
          monthTrainings.forEach(training => {
            if (!earliestDate || training.date < earliestDate) {
              earliestDate = training.date
            }
          })
        }
      }
      return earliestDate
    }

    const getMonday = (date) => {
      const d = new Date(date)
      const day = d.getDay()
      const diff = d.getDate() - day + (day === 0 ? -6 : 1)
      return new Date(d.setDate(diff))
    }

    const getWeekDates = (weekStart) => {
      const dates = []
      const start = new Date(weekStart)
      for (let i = 0; i < 7; i++) {
        const date = new Date(start)
        date.setDate(start.getDate() + i)
        dates.push(date.toISOString().split('T')[0])
      }
      return dates
    }

    const hasTrainingsInWeek = (weekStart) => {
      if (!props.groupedTrainings) return false
      
      const weekDates = getWeekDates(weekStart)
      
      // Check if any day in the week has trainings
      for (const monthKey in props.groupedTrainings) {
        const monthTrainings = props.groupedTrainings[monthKey]
        if (Array.isArray(monthTrainings)) {
          // Check if any training date falls within this week
          const hasTraining = monthTrainings.some(training => 
            weekDates.includes(training.date)
          )
          if (hasTraining) return true
        }
      }
      return false
    }

    const updateWeekNavigation = () => {
      // Check if there are any weeks before with trainings
      let hasPrevious = false
      let weekToCheck = new Date(currentWeekStart.value)
      weekToCheck.setDate(weekToCheck.getDate() - 7)
      
      for (let i = 0; i < 12; i++) {
        const weekStartString = weekToCheck.toISOString().split('T')[0]
        if (hasTrainingsInWeek(weekStartString)) {
          hasPrevious = true
          break
        }
        weekToCheck.setDate(weekToCheck.getDate() - 7)
      }
      canGoPreviousWeek.value = hasPrevious

      // Check if there are any weeks after with trainings
      let hasNext = false
      weekToCheck = new Date(currentWeekStart.value)
      weekToCheck.setDate(weekToCheck.getDate() + 7)
      
      for (let i = 0; i < 12; i++) {
        const weekStartString = weekToCheck.toISOString().split('T')[0]
        if (hasTrainingsInWeek(weekStartString)) {
          hasNext = true
          break
        }
        weekToCheck.setDate(weekToCheck.getDate() + 7)
      }
      canGoNextWeek.value = hasNext
    }

    const previousWeek = () => {
      // Find the previous week that has trainings
      let weekToCheck = new Date(currentWeekStart.value)
      weekToCheck.setDate(weekToCheck.getDate() - 7)
      
      // Look for a week with trainings up to 12 weeks back
      for (let i = 0; i < 12; i++) {
        const weekStartString = weekToCheck.toISOString().split('T')[0]
        if (hasTrainingsInWeek(weekStartString)) {
          currentWeekStart.value = weekStartString
          updateWeekNavigation()
          return
        }
        weekToCheck.setDate(weekToCheck.getDate() - 7)
      }
    }

    const nextWeek = () => {
      // Find the next week that has trainings
      let weekToCheck = new Date(currentWeekStart.value)
      weekToCheck.setDate(weekToCheck.getDate() + 7)
      
      // Look for a week with trainings up to 12 weeks forward
      for (let i = 0; i < 12; i++) {
        const weekStartString = weekToCheck.toISOString().split('T')[0]
        if (hasTrainingsInWeek(weekStartString)) {
          currentWeekStart.value = weekStartString
          updateWeekNavigation()
          return
        }
        weekToCheck.setDate(weekToCheck.getDate() + 7)
      }
    }

    const currentWeekTitle = computed(() => {
      if (!currentWeekStart.value) return ''
      
      const startDate = new Date(currentWeekStart.value)
      const endDate = new Date(startDate)
      endDate.setDate(startDate.getDate() + 6)
      
      const startDay = startDate.getDate()
      const endDay = endDate.getDate()
      const startMonth = startDate.toLocaleDateString('nl-NL', { month: 'long' })
      const endMonth = endDate.toLocaleDateString('nl-NL', { month: 'long' })
      const year = startDate.getFullYear()
      
      if (startMonth === endMonth) {
        return `${startDay}-${endDay} ${startMonth} ${year}`
      } else {
        return `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year}`
      }
    })

    // New: Separate month/year for header (like month view)
    const currentMonthYear = computed(() => {
      if (!currentWeekStart.value) return ''
      
      const startDate = new Date(currentWeekStart.value)
      const endDate = new Date(startDate)
      endDate.setDate(startDate.getDate() + 6)
      
      const startMonth = startDate.toLocaleDateString('nl-NL', { month: 'long' })
      const endMonth = endDate.toLocaleDateString('nl-NL', { month: 'long' })
      const year = startDate.getFullYear()
      
      if (startMonth === endMonth) {
        return `${startMonth.charAt(0).toUpperCase() + startMonth.slice(1)} ${year}`
      } else {
        return `${startMonth.charAt(0).toUpperCase() + startMonth.slice(1)} - ${endMonth.charAt(0).toUpperCase() + endMonth.slice(1)} ${year}`
      }
    })

    // New: Just the week range for navigation
    const currentWeekRange = computed(() => {
      if (!currentWeekStart.value) return ''
      
      const startDate = new Date(currentWeekStart.value)
      const endDate = new Date(startDate)
      endDate.setDate(startDate.getDate() + 6)
      
      const startDay = startDate.getDate()
      const endDay = endDate.getDate()
      const startMonth = startDate.getMonth()
      const endMonth = endDate.getMonth()
      
      if (startMonth === endMonth) {
        const monthName = startDate.toLocaleDateString('nl-NL', { month: 'long' })
        return `${startDay}-${endDay} ${monthName}`
      } else {
        const startMonthName = startDate.toLocaleDateString('nl-NL', { month: 'long' })
        const endMonthName = endDate.toLocaleDateString('nl-NL', { month: 'long' })
        return `${startDay} ${startMonthName} - ${endDay} ${endMonthName}`
      }
    })

    const handleCalendarViewChange = (newMode) => {
      calendarViewMode.value = newMode
      if (newMode === 'week') {
        initializeWeekView()
      }
    }

    // Initialize on mount
    onMounted(() => {
      initializeWeekView()
    })

    return {
      calendarViewMode,
      currentWeekStart,
      canGoPreviousWeek,
      canGoNextWeek,
      currentWeekTitle,
      currentMonthYear,
      currentWeekRange,
      handleCalendarViewChange,
      previousWeek,
      nextWeek
    }
  }
}
</script>

<style scoped>
.calendar-slider-container {
  position: relative;
  overflow: hidden;
}

/* Slide transitions */
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-enter-to, .slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.calendar-month {
  position: relative;
}
</style>
