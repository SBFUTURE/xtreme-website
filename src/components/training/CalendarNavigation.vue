<template>
  <div class="flex items-center justify-between bg-xtreme-dark bg-opacity-50 rounded-xl p-4 border border-xtreme-yellow border-opacity-20">
    <button 
      @click="$emit('previousMonth')"
      :disabled="!canGoPrevious"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-lg font-heading font-medium transition-all duration-300',
        canGoPrevious 
          ? 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20 hover:scale-105' 
          : 'text-gray-600 cursor-not-allowed'
      ]"
    >
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
      Vorige
    </button>

    <h3 class="text-3xl font-heading font-bold text-xtreme-yellow text-center">
      {{ formatMonthName(currentMonthKey) }}
    </h3>

    <button 
      @click="$emit('nextMonth')"
      :disabled="!canGoNext"
      :class="[
        'flex items-center gap-2 px-4 py-2 rounded-lg font-heading font-medium transition-all duration-300',
        canGoNext 
          ? 'text-xtreme-yellow hover:bg-xtreme-yellow hover:bg-opacity-20 hover:scale-105' 
          : 'text-gray-600 cursor-not-allowed'
      ]"
    >
      Volgende
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</template>

<script>
import { useTrainingUtils } from '@/composables/useTrainingUtils'

export default {
  name: 'CalendarNavigation',

  props: {
    currentMonthKey: String,
    canGoPrevious: Boolean,
    canGoNext: Boolean
  },

  emits: ['previousMonth', 'nextMonth'],

  setup() {
    const { formatMonthName } = useTrainingUtils()

    return {
      formatMonthName
    }
  }
}
</script>
