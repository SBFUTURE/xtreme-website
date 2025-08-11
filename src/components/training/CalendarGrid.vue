<template>
  <div class="calendar-grid bg-xtreme-dark bg-opacity-50 rounded-xl p-3 sm:p-6 border border-xtreme-yellow border-opacity-20">
    <!-- Days Header -->
    <div class="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4">
      <div v-for="day in ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo']" 
           :key="day" 
           class="text-center font-heading font-bold text-xtreme-yellow text-sm sm:text-base py-2 sm:py-3">
        {{ day }}
      </div>
    </div>
    
    <!-- Calendar Days -->
    <div class="grid grid-cols-7 gap-1 sm:gap-2">
      <!-- Empty cells for days before month starts -->
      <div v-for="empty in getEmptyDaysAtStart(currentMonthKey)" 
           :key="`empty-start-${empty}`" 
           class="h-20"></div>
      
      <!-- Days with events -->
      <CalendarDay
        v-for="day in getDaysInMonth(currentMonthKey)" 
        :key="day"
        :day="day"
        :current-month-key="currentMonthKey"
        :trainings="getTrainingsForDay(currentMonthKey, day, groupedTrainings)"
      />
      
      <!-- Empty cells for days after month ends -->
      <div v-for="empty in getEmptyDaysAtEnd(currentMonthKey)" 
           :key="`empty-end-${empty}`" 
           class="h-20"></div>
    </div>
  </div>
</template>

<script>
import CalendarDay from './CalendarDay.vue'
import { useCalendarHelpers } from '@/composables/useCalendarHelpers'

export default {
  name: 'CalendarGrid',
  
  components: {
    CalendarDay
  },

  props: {
    currentMonthKey: String,
    groupedTrainings: Object
  },

  setup() {
    const {
      getEmptyDaysAtStart,
      getEmptyDaysAtEnd,
      getDaysInMonth,
      getTrainingsForDay
    } = useCalendarHelpers()

    return {
      getEmptyDaysAtStart,
      getEmptyDaysAtEnd,
      getDaysInMonth,
      getTrainingsForDay
    }
  }
}
</script>

<style scoped>
.calendar-grid {
  min-height: 400px;
}

/* Responsive calendar */
@media (max-width: 768px) {
  .calendar-grid {
    font-size: 0.875rem;
  }
  
  .calendar-grid .grid > div {
    height: 60px;
  }
  
  .calendar-grid .text-xs {
    font-size: 0.625rem;
  }
}
</style>
