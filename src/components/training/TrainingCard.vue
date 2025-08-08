<template>
  <div 
    :class="[
      'training-card group cursor-pointer transition-all duration-300 hover:scale-105',
      training.title === 'Evenement' ? 'event-card' : 'regular-card'
    ]"
  >
    <div class="flex items-center justify-between p-6">
      <div class="flex items-center space-x-4">
        <!-- Date Circle -->
        <div :class="[
          'w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg',
          training.title === 'Evenement' 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
            : 'bg-xtreme-yellow text-black'
        ]">
          {{ formatDay(training.date) }}
        </div>
        
        <!-- Event Details -->
        <div>
          <div class="flex items-center gap-3 mb-2">
            <h4 class="text-xl font-heading font-bold text-white">
              {{ formatDate(training.date) }}
            </h4>
            <span :class="[
              'px-3 py-1 rounded-full text-sm font-medium',
              training.title === 'Evenement' 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
                : 'bg-xtreme-yellow text-black'
            ]">
              {{ training.title }}
            </span>
          </div>
          
          <div class="flex items-center gap-4 text-gray-300">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium">{{ training.time }}</span>
            </div>
            
            <div v-if="training.note" class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span class="font-medium text-xtreme-light-yellow">{{ training.note }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow Icon -->
      <div class="text-xtreme-yellow group-hover:text-xtreme-light-yellow transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { useTrainingUtils } from '@/composables/useTrainingUtils'

export default {
  name: 'TrainingCard',

  props: {
    training: {
      type: Object,
      required: true
    }
  },

  setup() {
    const { formatDate, formatDay } = useTrainingUtils()

    return {
      formatDate,
      formatDay
    }
  }
}
</script>

<style scoped>
.regular-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255, 237, 78, 0.3);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.regular-card:hover {
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 0 8px 32px rgba(255, 237, 78, 0.2);
}

.event-card {
  background: linear-gradient(135deg, rgba(255, 237, 78, 0.1) 0%, rgba(255, 193, 7, 0.1) 100%);
  border: 2px solid rgba(255, 193, 7, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(255, 193, 7, 0.2);
}

.event-card:hover {
  border-color: rgba(255, 193, 7, 0.8);
  box-shadow: 0 8px 32px rgba(255, 193, 7, 0.3);
  background: linear-gradient(135deg, rgba(255, 237, 78, 0.15) 0%, rgba(255, 193, 7, 0.15) 100%);
}

/* Ice skating themed animations */
@keyframes ice-shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

.training-card::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, transparent, rgba(255, 237, 78, 0.1), transparent);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.training-card:hover::before {
  opacity: 1;
  animation: ice-shimmer 2s infinite;
}
</style>
