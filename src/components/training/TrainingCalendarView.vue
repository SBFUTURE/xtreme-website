<template>
  <div class="space-y-8">
    <!-- Calendar Navigation -->
    <CalendarNavigation
      :current-month-key="currentMonthKey"
      :can-go-previous="canGoPrevious"
      :can-go-next="canGoNext"
      @previous-month="$emit('previousMonth')"
      @next-month="$emit('nextMonth')"
    />

    <!-- Single Calendar Grid with Transition -->
    <div class="calendar-slider-container">
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
</template>

<script>
import CalendarNavigation from './CalendarNavigation.vue'
import CalendarGrid from './CalendarGrid.vue'
import CalendarDots from './CalendarDots.vue'

export default {
  name: 'TrainingCalendarView',
  
  components: {
    CalendarNavigation,
    CalendarGrid,
    CalendarDots
  },

  props: {
    currentMonthKey: String,
    groupedTrainings: Object,
    canGoPrevious: Boolean,
    canGoNext: Boolean
  },

  emits: ['previousMonth', 'nextMonth', 'monthSelected'],

  setup(props, { emit }) {
    return {
      // Event handlers can be passed directly through emit
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
