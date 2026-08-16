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

    const formatDateOnlyForCalendar = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}${month}${day}`
    }

    const parseTrainingDateTime = (training) => {
      if (!training || !training.date) return null

      const rawTime = String(training.time || '').trim()
      const date = new Date(`${training.date}T12:00:00`)

      if (!rawTime || rawTime === 'TBA' || rawTime === 'WEEKEND') {
        return {
          start: date,
          end: new Date(date.getTime() + 24 * 60 * 60 * 1000),
          isAllDay: true
        }
      }

      const [startRaw, endRaw] = rawTime.split('-')
      if (!startRaw || !endRaw) return null

      const start = new Date(`${training.date}T${startRaw}:00`)
      const end = new Date(`${training.date}T${endRaw}:00`)

      if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
        return null
      }

      return { start, end, isAllDay: false }
    }

    const createICSFile = (trainings) => {
      let icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Xtreme on Ice//Calendar//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:Xtreme on Ice Training Schema\nX-WR-CALDESC:Alle trainingen en evenementen van Xtreme on Ice\nX-WR-TIMEZONE:Europe/Brussels\n`;

      trainings.forEach((training, index) => {
        const parsed = parseTrainingDateTime(training)
        if (!parsed) return

        const summary = `Xtreme on Ice - ${training.title}`
        const description = `Xtreme on Ice ${training.title}${training.note ? ` - ${training.note}` : ''}`
        const location = training.note || 'Xtreme on Ice'

        if (parsed.isAllDay) {
          icsContent += `BEGIN:VEVENT\nUID:${Date.now()}-${index}@xtremeonice.be\nDTSTAMP:${formatDateForCalendar(new Date())}\nDTSTART;VALUE=DATE:${formatDateOnlyForCalendar(parsed.start)}\nDTEND;VALUE=DATE:${formatDateOnlyForCalendar(parsed.end)}\nSUMMARY:${summary}\nDESCRIPTION:${description}\nLOCATION:${location}\nCATEGORIES:SPORTS,ICE SKATING\nSTATUS:CONFIRMED\nTRANSP:OPAQUE\nEND:VEVENT\n`;
          return
        }

        icsContent += `BEGIN:VEVENT\nUID:${Date.now()}-${index}@xtremeonice.be\nDTSTAMP:${formatDateForCalendar(new Date())}\nDTSTART:${formatDateForCalendar(parsed.start)}\nDTEND:${formatDateForCalendar(parsed.end)}\nSUMMARY:${summary}\nDESCRIPTION:${description}\nLOCATION:${location}\nCATEGORIES:SPORTS,ICE SKATING\nSTATUS:CONFIRMED\nTRANSP:OPAQUE\nEND:VEVENT\n`;
      });

      icsContent += 'END:VCALENDAR';

      // Create and download the file (universal method)
      const blob = new Blob([icsContent.replace(/\\n/g, '\n')], { type: 'text/calendar' });
      const url = URL.createObjectURL(blob);
      const filename = 'xtreme-on-ice-trainingen-2026-2027.ics';
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 1000);
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
