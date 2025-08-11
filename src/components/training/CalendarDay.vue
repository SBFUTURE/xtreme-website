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
    <div class="space-y-1 overflow-hidden">
      <div v-for="(training, index) in trainings.slice(0, 3)" 
           :key="training.date"
           :class="[
             'text-xs px-1.5 py-1 rounded text-black font-medium cursor-pointer transition-all hover:brightness-110',
             getEventClass(training.title)
           ]"
           :title="`${training.title} - ${training.time}${training.note ? ' - ' + training.note : ''}`">
        
        <!-- Mobile: Simple display -->
        <div class="sm:hidden flex items-center justify-between">
          <span class="font-bold text-xs">{{ training.time.split('-')[0] }}</span>
          <span class="text-[10px] opacity-90">{{ getEventLabel(training.title) }}</span>
        </div>
        
        <!-- Desktop: Full display -->
        <div class="hidden sm:flex items-center justify-between">
          <div>
            <div class="font-bold text-xs leading-tight">{{ training.time }}</div>
            <div class="text-[10px] opacity-90 leading-tight">{{ training.title }}</div>
          </div>
          <span class="text-sm opacity-75">{{ getEventIcon(training.title) }}</span>
        </div>
      </div>
      
      <!-- Show "+X more" if there are more events -->
      <div v-if="trainings.length > 3" 
           class="text-[9px] text-gray-400 px-1 py-0.5 bg-gray-800 bg-opacity-50 rounded text-center">
        +{{ trainings.length - 3 }}
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

    const getEventLabel = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'Night'
        case 'Evenement':
          return 'Event'
        default:
          return 'Train'
      }
    }

    return {
      isToday,
      isPastDay,
      getEventClass,
      getEventIcon,
      getEventLabel
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
