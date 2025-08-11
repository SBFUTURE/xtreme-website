<template>
  <section class="py-20 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6 text-xtreme-yellow">
          Onze Evenementen
        </h2>
        <p class="text-lg text-gray-300 max-w-3xl mx-auto">
          Ontdek onze geweldige schaatsevenementen en belevenissen
        </p>
        <p class="text-sm text-gray-400 mt-4 lg:hidden">
          Swipe om door de evenementen te bladeren
        </p>
      </div>

      <div class="relative">
        <!-- Slider Container -->
        <div class="overflow-hidden rounded-2xl">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            ref="sliderContainer"
            @touchstart="handleTouchStart"
            @touchend="handleTouchEnd"
          >
            <div 
              v-for="event in events" 
              :key="event.id"
              class="w-full flex-shrink-0"
            >
              <router-link 
                :to="`/events/${event.id}`"
                class="relative h-[500px] lg:h-[600px] event-slide-container block"
              >
                <img 
                  :src="event.mainImage" 
                  :alt="event.title + ' evenement'" 
                  class="w-full h-full object-cover transition-all duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                
                <!-- Content Overlay -->
                <div class="absolute bottom-8 left-8 right-8 text-white">
                  <div class="flex items-center mb-4">
                    <div class="bg-xtreme-yellow text-black px-3 py-1 rounded-full font-bold text-sm mr-4">
                      {{ event.year }}
                    </div>
                    <div class="text-xtreme-yellow font-semibold" v-if="event.isOwnEvent">
                      🎉 Door Ons Georganiseerd
                    </div>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-heading font-bold text-xtreme-yellow mb-4">
                    {{ event.title }}
                  </h3>
                  <p class="text-lg text-gray-200 max-w-2xl mb-6">
                    {{ event.description }}
                  </p>
                  <span class="inline-flex items-center bg-xtreme-yellow text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-xtreme-light-yellow hover:scale-105">
                    Bekijk Meer
                    <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons - Hidden on mobile/tablet -->
        <button 
          @click="previousSlide"
          class="hidden lg:block absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-xtreme-yellow p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-xtreme-yellow/20 z-10"
        >
          <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button 
          @click="nextSlide"
          class="hidden lg:block absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 hover:bg-opacity-80 text-xtreme-yellow p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-xtreme-yellow/20 z-10"
        >
          <svg class="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <!-- Slide Indicators -->
        <div class="flex justify-center mt-6 space-x-2">
          <button
            v-for="(event, index) in events"
            :key="index"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="index === currentSlide ? 'bg-xtreme-yellow scale-125' : 'bg-gray-600 hover:bg-gray-400'"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventSlider',
  data() {
    return {
      currentSlide: 0,
      autoPlayInterval: null,
      touchStartX: 0,
      touchEndX: 0,
      events: [
        {
          id: 'xtreme-night-5',
          title: 'Xtreme Night 5',
          year: '2025',
          description: 'Onze vijfde editie van Xtreme Night was een groot succes! Een avond vol spectaculaire optredens, geweldige sfeer en onvergetelijke momenten op het ijs.',
          mainImage: '/src/assets/Images/2025-Xtreme-Night-5/IMG_6260.JPG',
          isOwnEvent: true
        },
        {
          id: 'polarion-2024',
          title: 'Polarion Evenement',
          year: '2024',
          description: 'Spektakulaire show met freestyle en artistieke elementen. Een professionele demonstratie van onze vaardigheden op het ijs.',
          mainImage: '/src/assets/Images/2024-Polarion/IMG_4117_Freestyle Night-18april.JPG',
          isOwnEvent: false
        },
        {
          id: 'val-thorens-2024',
          title: 'Val Thorens Trip',
          year: '2024',
          description: 'Onvergetelijke wintersportervaring in de Franse Alpen. Een geweldige trip vol avontuur en kameraadschap.',
          mainImage: '/src/assets/Images/2024-Val-Thorens/PaulComShoot110.jpg',
          isOwnEvent: false
        },
        {
          id: 'oostenrijk-2025',
          title: 'Oostenrijk Trip',
          year: '2025',
          description: 'Recente reis naar de Oostenrijkse bergen. Prachtige locaties en onvergetelijke momenten met het team.',
          mainImage: '/src/assets/Images/2025-Oostenrijk/IMG_6042.JPG',
          isOwnEvent: false
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.events.length
    },
    previousSlide() {
      this.currentSlide = this.currentSlide === 0 ? this.events.length - 1 : this.currentSlide - 1
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.events.length
      }, 30000) // Change slide every 30 seconds
    },
    stopAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval)
        this.autoPlayInterval = null
      }
    },
    handleKeydown(event) {
      if (event.key === 'ArrowLeft') {
        this.previousSlide()
      } else if (event.key === 'ArrowRight') {
        this.nextSlide()
      }
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX
    },
    handleTouchEnd(event) {
      this.touchEndX = event.changedTouches[0].clientX
      this.handleSwipe()
    },
    handleSwipe() {
      const swipeThreshold = 50 // minimum distance for swipe
      const swipeDistance = this.touchStartX - this.touchEndX
      
      if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
          // Swipe left - next slide
          this.nextSlide()
        } else {
          // Swipe right - previous slide
          this.previousSlide()
        }
      }
    }
  },
  mounted() {
    this.startAutoPlay()
    window.addEventListener('keydown', this.handleKeydown)
  },
  unmounted() {
    this.stopAutoPlay()
    window.removeEventListener('keydown', this.handleKeydown)
  }
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.5s ease-in-out;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

button:disabled:hover {
  transform: none;
  scale: 1;
}

.event-slide-container {
  transition: all 0.4s ease;
  cursor: pointer;
}

.event-slide-container:hover {
  filter: drop-shadow(0 0 30px rgba(255, 237, 78, 0.4));
}

.event-slide-container:hover img {
  transform: scale(1.02);
  filter: brightness(1.1) saturate(1.1);
}

.event-slide-container:hover .absolute.inset-0 {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2), transparent);
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .absolute.bottom-8 {
    bottom: 1rem;
    left: 1rem;
    right: 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
</style>
