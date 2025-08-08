<template>
  <div 
    :class="[
      'relative h-20 border border-gray-700 rounded-lg p-1 transition-colors',
      isToday(currentMonthKey, day) ? 'today' : '',
      isPastDay(currentMonthKey, day) ? 'past-day' : 'hover:border-xtreme-yellow hover:border-opacity-50'
    ]"
  >
    <!-- Day Number -->
    <div :class="[
      'text-sm font-medium mb-1',
      isPastDay(currentMonthKey, day) ? 'text-gray-600' : 'text-gray-300'
    ]">{{ day }}</div>
    
    <!-- Training Events -->
    <div class="space-y-1">
      <div v-for="training in trainings" 
           :key="training.date"
           :class="[
             'text-xs px-1 py-0.5 rounded text-black font-medium truncate',
             getEventClass(training.title)
           ]"
           :title="`${training.title} - ${training.time}${training.note ? ' - ' + training.note : ''}`">
        {{ training.time.split('-')[0] }}
        {{ getEventIcon(training.title) }}
      </div>
    </div>
  </div>
</template>

<script>
import { useCalendarHelpers } from '@/composables/useCalendarHelpers'

export default {
  name: 'CalendarDay',

  props: {
    day: Number,
    currentMonthKey: String,
    trainings: Array
  },

  setup() {
    const { isToday, isPastDay } = useCalendarHelpers()

    const getEventClass = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        case 'Evenement':
          return 'bg-gradient-to-r from-yellow-400 to-orange-400'
        default:
          return 'bg-xtreme-yellow'
      }
    }

    const getEventIcon = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return '🌟'
        case 'Evenement':
          return '🎉'
        default:
          return '⛸️'
      }
    }

    return {
      isToday,
      isPastDay,
      getEventClass,
      getEventIcon
    }
  }
}
</script>

<style scoped>
/* Today highlight */
.today {
  background: rgba(255, 237, 78, 0.1) !important;
  border-color: rgba(255, 237, 78, 0.5) !important;
}

.today .text-gray-300 {
  color: #FFED4E !important;
  font-weight: bold;
}

/* Past days styling */
.past-day {
  background: rgba(0, 0, 0, 0.3) !important;
  border-color: rgba(128, 128, 128, 0.3) !important;
  opacity: 0.5;
}

.past-day:hover {
  border-color: rgba(128, 128, 128, 0.3) !important;
}
</style>
