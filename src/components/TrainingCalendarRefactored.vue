<template>
  <div class="training-calendar bg-ice-gradient p-8 rounded-xl">
    <!-- Header -->
    <TrainingCalendarHeader />

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto">
      <!-- View Toggle -->
      <ViewToggle v-model="viewMode" />

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
  name: 'TrainingCalendarRefactored',
  
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

    return {
      viewMode,
      currentMonthKey,
      groupedTrainings,
      canGoPrevious,
      canGoNext,
      previousMonth,
      nextMonth,
      setCurrentMonth
    }
  }
}
</script>

<style scoped>
.training-calendar {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%);
}
</style>
