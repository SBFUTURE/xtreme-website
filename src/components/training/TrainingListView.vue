<template>
  <div class="space-y-8 sm:space-y-12 px-2 sm:px-0">
    <div v-for="(month, monthName) in groupedTrainings" :key="monthName" class="month-section">
      <h3 class="text-2xl sm:text-3xl font-heading font-bold text-xtreme-yellow mb-4 sm:mb-6 text-center px-4">
        {{ formatMonthName(monthName) }}
      </h3>
      
      <div class="grid gap-3 sm:gap-4">
        <TrainingCard 
          v-for="training in month" 
          :key="training.date"
          :training="training"
        />
      </div>
    </div>
  </div>
</template>

<script>
import TrainingCard from './TrainingCard.vue'
import { useTrainingUtils } from '@/composables/useTrainingUtils'

export default {
  name: 'TrainingListView',
  
  components: {
    TrainingCard
  },

  props: {
    groupedTrainings: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const { formatMonthName } = useTrainingUtils()

    return {
      formatMonthName
    }
  }
}
</script>

<style scoped>
.month-section {
  position: relative;
}

.month-section::before {
  content: '';
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #FFED4E, transparent);
}
</style>
