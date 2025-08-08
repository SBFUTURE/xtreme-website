<template>
  <div class="flex justify-center space-x-2 mt-6">
    <button
      v-for="(month, monthKey) in groupedTrainings"
      :key="monthKey"
      @click="$emit('monthSelected', monthKey)"
      :class="[
        'w-3 h-3 rounded-full transition-all duration-300',
        currentMonthKey === monthKey 
          ? 'bg-xtreme-yellow scale-125' 
          : 'bg-gray-600 hover:bg-xtreme-yellow hover:bg-opacity-50'
      ]"
      :title="formatMonthName(monthKey)"
    ></button>
  </div>
</template>

<script>
import { useTrainingUtils } from '@/composables/useTrainingUtils'

export default {
  name: 'CalendarDots',

  props: {
    groupedTrainings: Object,
    currentMonthKey: String
  },

  emits: ['monthSelected'],

  setup() {
    const { formatMonthName } = useTrainingUtils()

    return {
      formatMonthName
    }
  }
}
</script>
