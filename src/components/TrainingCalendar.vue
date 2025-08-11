<template>
  <div class="training-calendar bg-ice-gradient rounded-xl">
    <!-- Header -->
    <TrainingCalendarHeader />

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto">
      <!-- View Toggle -->
      <ViewToggle v-model="viewMode" />

      <!-- Export Calendar Button -->
      <div class="text-center my-8">
        <button 
          @click="exportAllToCalendar"
          class="inline-flex items-center gap-3 px-6 py-3 bg-xtreme-yellow text-black font-bold rounded-xl hover:bg-xtreme-light-yellow transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Bewaar alle trainingen in je agenda
        </button>
      </div>

      <!-- Legend -->
      <TrainingLegend />

      <!-- List View -->
      <TrainingListView 
        v-if="viewMode === 'list'"
        :grouped-trainings="groupedTrainings"
      />

      <!-- Calendar View -->
      <TrainingCalendarView
        v-if="viewMode === 'calendar'"
        :current-month-key="currentMonthKey"
        :grouped-trainings="groupedTrainings"
        :can-go-previous="canGoPrevious"
        :can-go-next="canGoNext"
        @previous-month="previousMonth"
        @next-month="nextMonth"
        @month-selected="setCurrentMonth"
      />
    </div>

    <!-- Call to Action -->
    <TrainingCallToAction />
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { useTrainingData } from '@/composables/useTrainingData'

// Components
import TrainingCalendarHeader from './training/TrainingCalendarHeader.vue'
import ViewToggle from './training/ViewToggle.vue'
import TrainingLegend from './training/TrainingLegend.vue'
import TrainingListView from './training/TrainingListView.vue'
import TrainingCalendarView from './training/TrainingCalendarView.vue'
import TrainingCallToAction from './training/TrainingCallToAction.vue'

export default {
  name: 'TrainingCalendar',
  
  components: {
    TrainingCalendarHeader,
    ViewToggle,
    TrainingLegend,
    TrainingListView,
    TrainingCalendarView,
    TrainingCallToAction
  },

  setup() {
    // Reactive data
    const viewMode = ref('list')

    // Use training data composable
    const {
      currentMonthKey,
      groupedTrainings,
      canGoPrevious,
      canGoNext,
      previousMonth,
      nextMonth,
      setCurrentMonth,
      resetToInitialMonth,
      initializeData
    } = useTrainingData()

    // Watch for view mode changes
    watch(viewMode, (newMode, oldMode) => {
      // Reset calendar position when switching from list to calendar view
      if (oldMode === 'list' && newMode === 'calendar') {
        resetToInitialMonth()
      }
    })

    onMounted(() => {
      initializeData()
    })

    // Export calendar functionality
    const exportAllToCalendar = () => {
      // Collect all training events
      const allTrainings = []
      
      for (const monthKey in groupedTrainings.value) {
        const monthTrainings = groupedTrainings.value[monthKey]
        if (Array.isArray(monthTrainings)) {
          allTrainings.push(...monthTrainings)
        }
      }

      // Sort by date
      allTrainings.sort((a, b) => a.date.localeCompare(b.date))

      // Create ICS file with all events
      createICSFile(allTrainings)
    }

    const formatDateForCalendar = (date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
    }

    const createICSFile = (trainings) => {
      let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Xtreme on Ice//Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Xtreme on Ice Training Schema
X-WR-CALDESC:Alle trainingen en evenementen van Xtreme on Ice
X-WR-TIMEZONE:Europe/Brussels
`

      trainings.forEach((training, index) => {
        const startTime = new Date(`${training.date}T${training.time.split('-')[0]}:00`)
        const endTime = new Date(`${training.date}T${training.time.split('-')[1]}:00`)
        
        icsContent += `BEGIN:VEVENT
UID:${Date.now()}-${index}@xtremeonice.be
DTSTAMP:${formatDateForCalendar(new Date())}
DTSTART:${formatDateForCalendar(startTime)}
DTEND:${formatDateForCalendar(endTime)}
SUMMARY:Xtreme on Ice - ${training.title}
DESCRIPTION:Xtreme on Ice ${training.title}${training.note ? ` - ${training.note}` : ''}
LOCATION:${training.note || 'Xtreme on Ice'}
CATEGORIES:SPORTS,ICE SKATING
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`
      })

      icsContent += 'END:VCALENDAR'

      // Create and download the file
      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'xtreme-on-ice-trainingen-2025-2026.ics'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    }

    return {
      viewMode,
      currentMonthKey,
      groupedTrainings,
      canGoPrevious,
      canGoNext,
      previousMonth,
      nextMonth,
      setCurrentMonth,
      exportAllToCalendar
    }
  }
}
</script>

<style scoped>
.training-calendar {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
}
</style>
