<template>
    <div 
      :class="[
        'training-card group cursor-pointer transition-all duration-300 hover:scale-105',
        getCardClass(training.title)
      ]"
    >
      <div class="flex items-start justify-between p-4 sm:p-6 gap-3">
        <div class="flex items-start space-x-3 sm:space-x-4 min-w-0 flex-1">
          <!-- Date Circle -->
          <div :class="[
            'w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-bold text-sm sm:text-lg flex-shrink-0',
            getDateCircleClass(training.title)
          ]">
            {{ formatDay(training.date) }}
          </div>
          
          <!-- Event Details -->
          <div class="min-w-0 flex-1">
            <div class="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <h4 class="text-lg sm:text-xl font-heading font-bold text-white truncate">
                {{ formatDate(training.date) }}
              </h4>
              <span :class="[
                'px-2 py-1 sm:px-3 rounded-full text-xs sm:text-sm font-medium inline-block w-fit',
                getBadgeClass(training.title)
              ]">
                {{ training.title }}
              </span>
            </div>
            
            <div class="flex items-center gap-2 sm:gap-4 text-gray-300">
              <div class="flex items-center gap-1 sm:gap-2 min-w-0">
                <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span class="font-medium text-sm sm:text-base">{{ training.time }}</span>
              </div>
            </div>
            
            <!-- Location/Note on separate line -->
            <div v-if="training.note" class="flex items-start gap-1 sm:gap-2 text-gray-300 mt-2">
              <svg class="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <span class="font-medium text-xtreme-light-yellow text-sm sm:text-base leading-tight">{{ training.note }}</span>
            </div>
          </div>
        </div>

        <!-- Arrow Icon -->
        <div class="text-xtreme-yellow group-hover:text-xtreme-light-yellow transition-colors flex-shrink-0">
          <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

    const getCardClass = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'xtreme-night-card'
        case 'Evenement':
          return 'event-card'
        default:
          return 'regular-card'
      }
    }

    const getDateCircleClass = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
        case 'Evenement':
          return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
        default:
          return 'bg-xtreme-yellow text-black'
      }
    }

    const getBadgeClass = (title) => {
      switch (title) {
        case 'Xtreme Night':
          return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
        case 'Evenement':
          return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black'
        default:
          return 'bg-xtreme-yellow text-black'
      }
    }

    return {
      formatDate,
      formatDay,
      getCardClass,
      getDateCircleClass,
      getBadgeClass
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

.xtreme-night-card {
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%);
  border: 2px solid rgba(147, 51, 234, 0.5);
  border-radius: 1rem;
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 20px rgba(147, 51, 234, 0.2);
  position: relative;
  overflow: hidden;
}

.xtreme-night-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #9333ea, #ec4899, #9333ea);
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.xtreme-night-card:hover::before {
  opacity: 0.3;
  animation: xtreme-glow 2s infinite alternate;
}

.xtreme-night-card:hover {
  border-color: rgba(236, 72, 153, 0.8);
  box-shadow: 0 8px 32px rgba(147, 51, 234, 0.4);
  background: linear-gradient(135deg, rgba(147, 51, 234, 0.15) 0%, rgba(236, 72, 153, 0.15) 100%);
  transform: translateY(-2px);
}

/* Ice skating themed animations */
@keyframes ice-shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes xtreme-glow {
  0% { 
    opacity: 0.2;
    transform: rotate(0deg);
  }
  100% { 
    opacity: 0.4;
    transform: rotate(1deg);
  }
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
