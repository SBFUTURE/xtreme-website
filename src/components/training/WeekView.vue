<template>
  <div class="week-view bg-xtreme-dark bg-opacity-50 rounded-xl p-3 sm:p-4 lg:p-6 border border-xtreme-yellow border-opacity-20">
    <!-- Week Navigation (only show if showHeader is true) -->
    <div v-if="showHeader" class="flex items-center justify-between mb-4">
      <button 
        @click="$emit('previousWeek')"
        :disabled="!canGoPrevious"
        class="p-2 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
        <svg class="w-5 h-5 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      
      <h3 class="text-lg sm:text-xl font-heading font-bold text-xtreme-yellow">
        {{ weekTitle }}
      </h3>
      
      <button 
        @click="$emit('nextWeek')"
        :disabled="!canGoNext"
        class="p-2 rounded-lg bg-xtreme-yellow bg-opacity-10 hover:bg-opacity-20 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
        <svg class="w-5 h-5 text-xtreme-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>

    <!-- Week Days -->
    <div class="space-y-2">
      <div 
        v-for="day in weekDays" 
        :key="day.date"
        :class="[
          'flex items-center p-3 sm:p-4 rounded-xl border transition-all',
          isToday(day.date) ? 'border-xtreme-yellow border-opacity-80 bg-xtreme-yellow bg-opacity-10' : 'border-gray-700 hover:border-gray-600',
          isPastDay(day.date) ? 'opacity-60' : ''
        ]">
        
        <!-- Day Info -->
        <div class="flex-shrink-0 w-16 sm:w-20 text-center">
          <div :class="[
            'text-xs font-medium uppercase tracking-wide',
            isToday(day.date) ? 'text-xtreme-yellow' : 'text-gray-400'
          ]">
            {{ getDayName(day.date) }}
          </div>
          <div :class="[
            'text-xl sm:text-2xl font-bold mt-1',
            isToday(day.date) ? 'text-xtreme-yellow' : isPastDay(day.date) ? 'text-gray-600' : 'text-gray-200'
          ]">
            {{ getDayNumber(day.date) }}
          </div>
        </div>
        
        <!-- Events -->
        <div class="flex-1 ml-4">
          <div v-if="day.trainings.length === 0" class="text-gray-500 italic text-sm">
            Geen trainingen
          </div>
          <div v-else class="space-y-2">
            <div 
              v-for="training in day.trainings" 
              :key="training.date"
              :class="[
                'flex items-center justify-between p-3 rounded-lg cursor-pointer hover:brightness-110 transition-all',
                getEventClass(training.title)
              ]"
              :title="getTooltipText(training)"
              @click="showTrainingDetails(training)">
              
              <div class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <div class="text-sm font-bold">{{ getStartTime(training.time) }}</div>
                  <div class="text-xs opacity-90">{{ getEndTime(training.time) }}</div>
                </div>
                <div>
                  <div class="font-semibold">{{ training.title }}</div>
                  <div v-if="training.note" class="text-xs opacity-90">{{ training.note }}</div>
                </div>
              </div>
              
              <div class="text-xs font-medium opacity-75">
                {{ getDuration(training.time) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useCalendarHelpers } from '@/composables/useCalendarHelpers'

export default {
  name: 'WeekView',

  props: {
    currentWeekStart: String, // Format: 'YYYY-MM-DD'
    groupedTrainings: Object,
    canGoPrevious: Boolean,
    canGoNext: Boolean,
    showHeader: {
      type: Boolean,
      default: true
    }
  },

  emits: ['previousWeek', 'nextWeek'],

  setup(props) {
    const { isToday, isPastDay } = useCalendarHelpers()

    const weekTitle = computed(() => {
      if (!props.currentWeekStart) return ''
      
      const startDate = new Date(props.currentWeekStart)
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

    const weekDays = computed(() => {
      if (!props.currentWeekStart) return []
      
      const days = []
      const startDate = new Date(props.currentWeekStart)
      
      for (let i = 0; i < 7; i++) {
        const date = new Date(startDate)
        date.setDate(startDate.getDate() + i)
        const dateString = date.toISOString().split('T')[0]
        
        // Get trainings for this day from grouped trainings
        const trainings = getTrainingsForDate(dateString)
        
        days.push({
          date: dateString,
          trainings: trainings
        })
      }
      
      return days
    })

    const getTrainingsForDate = (dateString) => {
      if (!props.groupedTrainings) return []
      
      // Search through all months to find trainings for this specific date
      for (const monthKey in props.groupedTrainings) {
        const monthTrainings = props.groupedTrainings[monthKey]
        if (Array.isArray(monthTrainings)) {
          // Filter trainings for this specific date
          const dayTrainings = monthTrainings.filter(training => training.date === dateString)
          if (dayTrainings.length > 0) return dayTrainings
        }
      }
      return []
    }

    const getDayName = (dateString) => {
      const date = new Date(dateString)
      return date.toLocaleDateString('nl-NL', { weekday: 'short' }).toUpperCase()
    }

    const getDayNumber = (dateString) => {
      const date = new Date(dateString)
      return date.getDate()
    }

    const getEventClass = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-sm'
        case 'Evenement':
          return 'bg-gradient-to-r from-orange-400 to-red-400 text-white shadow-sm'
        default:
          return 'bg-xtreme-yellow text-black shadow-sm'
      }
    }

    const getStartTime = (timeString) => {
      return timeString.split('-')[0]
    }

    const getEndTime = (timeString) => {
      return timeString.split('-')[1]
    }

    const getDuration = (timeString) => {
      const [start, end] = timeString.split('-')
      const startTime = new Date(`2000-01-01 ${start}`)
      const endTime = new Date(`2000-01-01 ${end}`)
      const diff = (endTime - startTime) / (1000 * 60) // minutes
      
      if (diff >= 60) {
        const hours = Math.floor(diff / 60)
        const minutes = diff % 60
        return minutes > 0 ? `${hours}u${minutes}m` : `${hours}u`
      }
      return `${diff}m`
    }

    const getTooltipText = (training) => {
      const note = training.note ? ` - ${training.note}` : ''
      return `${training.title} - ${training.time}${note}`
    }

    const showTrainingDetails = (training) => {
      console.log('Training details:', training)
    }

    return {
      weekTitle,
      weekDays,
      getDayName,
      getDayNumber,
      getEventClass,
      getStartTime,
      getEndTime,
      getDuration,
      getTooltipText,
      showTrainingDetails,
      isToday,
      isPastDay
    }
  }
}
</script>

<style scoped>
.week-view {
  min-height: 200px;
}

/* Smooth animations */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Hover effects */
.hover\:brightness-110:hover {
  filter: brightness(1.1);
}

.hover\:border-gray-600:hover {
  border-color: rgb(75, 85, 99);
}
</style>
