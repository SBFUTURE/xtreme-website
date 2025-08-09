<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Loading State -->
    <div v-if="!event" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <div class="text-6xl text-xtreme-yellow mb-4">⚡</div>
        <p class="text-xl text-gray-300">Evenement wordt geladen...</p>
      </div>
    </div>

    <!-- Event Detail Content -->
    <div v-else>
      <!-- Hero Section -->
      <section class="py-16 px-4">
        <div class="max-w-7xl mx-auto">
          <!-- Back Button -->
          <div class="mb-8">
            <router-link 
              to="/events" 
              class="inline-flex items-center text-xtreme-yellow hover:text-xtreme-light-yellow transition-colors font-semibold"
            >
              ← Terug naar Evenementen
            </router-link>
          </div>

          <!-- Event Header -->
          <div class="text-center mb-12">
            <div v-if="event.id === 'xtreme-night-5'" class="inline-flex items-center bg-xtreme-yellow text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
              🏆 ONZE TROTS
            </div>
            <div class="bg-xtreme-yellow text-black px-3 py-1 rounded-full font-bold text-sm mb-4 inline-block">
              {{ event.year }}
            </div>
            <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-6 text-xtreme-yellow ice-glide">
              {{ event.title }}
            </h1>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {{ event.shortDescription }}
            </p>
          </div>
        </div>
      </section>

      <!-- Main Image Slider -->
      <section class="py-8 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="relative">
            <!-- Image Slider -->
            <div class="relative overflow-hidden rounded-2xl bg-black group">
              <div class="relative h-[400px] lg:h-[600px]">
                <transition name="slide-fade" mode="out-in">
                  <img 
                    :key="currentImageIndex"
                    :src="event.images[currentImageIndex]" 
                    :alt="event.title + ' - ' + (currentImageIndex + 1)" 
                    class="w-full h-full object-cover"
                  />
                </transition>
                
                <!-- Navigation Arrows -->
                <button 
                  @click="previousImage"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all backdrop-blur-sm"
                  v-show="event.images.length > 1"
                >
                  ‹
                </button>
                <button 
                  @click="nextImage"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-all backdrop-blur-sm"
                  v-show="event.images.length > 1"
                >
                  ›
                </button>

                <!-- Image Counter -->
                <div class="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                  {{ currentImageIndex + 1 }} / {{ event.images.length }}
                </div>
              </div>
            </div>

            <!-- Thumbnail Navigation -->
            <div v-if="event.images.length > 1" class="mt-6">
              <div class="flex justify-center space-x-2 overflow-x-auto pb-2">
                <button
                  v-for="(image, index) in event.images"
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="[
                    'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all',
                    currentImageIndex === index 
                      ? 'border-xtreme-yellow shadow-lg' 
                      : 'border-transparent hover:border-xtreme-yellow hover:border-opacity-50'
                  ]"
                >
                  <img 
                    :src="image" 
                    :alt="event.title + ' - thumbnail ' + (index + 1)"
                    class="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Event Details -->
      <section class="py-16 px-4">
        <div class="max-w-4xl mx-auto">
          <div class="bg-xtreme-dark bg-opacity-70 rounded-2xl p-8 lg:p-12 shadow-frost border border-xtreme-yellow border-opacity-30">
            
            <!-- Description -->
            <div class="mb-8">
              <h2 class="text-3xl font-heading font-bold mb-6 text-xtreme-yellow">
                Over Dit Evenement
              </h2>
              <p class="text-gray-300 text-lg leading-relaxed">
                {{ event.description }}
              </p>
            </div>

            <!-- Highlights -->
            <div v-if="event.highlights && event.highlights.length > 0">
              <h3 class="text-2xl font-heading font-bold text-xtreme-yellow mb-6">Hoogtepunten</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div 
                  v-for="highlight in event.highlights" 
                  :key="highlight"
                  class="flex items-start bg-black bg-opacity-30 rounded-lg p-4 transition-all hover:bg-opacity-40"
                >
                  <span class="text-xtreme-yellow mr-3 text-xl flex-shrink-0">⭐</span>
                  <span class="text-gray-300">{{ highlight }}</span>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="mt-12 text-center">
              <div class="bg-gradient-to-r from-xtreme-yellow to-xtreme-light-yellow p-0.5 rounded-xl inline-block">
                <div class="bg-xtreme-dark rounded-xl px-8 py-4">
                  <p class="text-xtreme-yellow font-semibold text-lg mb-4">
                    Wil je ook deel uitmaken van onze volgende evenementen?
                  </p>
                  <router-link 
                    to="/contact"
                    class="btn-primary"
                  >
                    Neem Contact Op
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Reactive data
const currentImageIndex = ref(0)
const event = ref(null)

// Event data (same as in EventView but as a composable function)
const events = [
  {
    id: 'xtreme-night-5',
    title: 'Xtreme Night 5',
    year: '2025',
    shortDescription: 'Ons eigen georganiseerde spectaculaire schaatsevenement',
    description: 'Xtreme Night 5 was onze vijfde editie van dit geweldige schaatsevenement dat volledig door Xtreme On Ice werd georganiseerd. Een avond vol spannende wedstrijden, artistieke optredens en een onvergetelijke sfeer op het ijs. Leden van onze vereniging, samen met gastschaatsers, lieten hun beste kunnen zien in verschillende categorieën. Het evenement trok bezoekers van heinde en verre en was een waar bewijs van de groeiende reputatie van onze ijsvereniging.',
    mainImage: '/src/assets/Images/2025-Xtreme-Night-5/IMG_6384.JPG',
    images: [
      '/src/assets/Images/2025-Xtreme-Night-5/IMG_6384.JPG',
      '/src/assets/Images/2025-Xtreme-Night-5/IMG_6386.JPG',
      '/src/assets/Images/2025-Xtreme-Night-5/IMG_6390.JPG'
    ],
    imageCount: 3,
    highlights: [
      'Volledig georganiseerd door Xtreme On Ice',
      'Meer dan 200 bezoekers aanwezig',
      'Spectaculaire freestyle optredens',
      'Verschillende wedstrijdcategorieën',
      'Geweldige sfeer en gezelligheid'
    ]
  },
  {
    id: 'val-thorens-2024',
    title: 'Val Thorens Trip',
    year: '2024',
    shortDescription: 'Onvergetelijke wintersportervaring in de Franse Alpen',
    description: 'Onze reis naar Val Thorens was een fantastische ervaring waarbij onze leden de kans kregen om hun schaatsvaardigheden te testen in een prachtige bergomgeving. We namen deel aan verschillende races en activiteiten, waaronder fun races en sprongen. De sfeer was geweldig en iedereen heeft genoten van deze bijzondere reis. Arne en Maarten hebben zich bijzonder onderscheiden tijdens de wedstrijden.',
    mainImage: '/src/assets/Images/2024-Val-Thorens/PaulComShoot109.jpg',
    images: [
      '/src/assets/Images/2024-Val-Thorens/PaulComShoot109.jpg',
      '/src/assets/Images/2024-Val-Thorens/PaulComShoot110.jpg',
      '/src/assets/Images/2024-Val-Thorens/PaulComShoot131.jpg',
      '/src/assets/Images/2024-Val-Thorens/Fun race 1.JPG',
      '/src/assets/Images/2024-Val-Thorens/Fun race 2.JPG',
      '/src/assets/Images/2024-Val-Thorens/Arne 1.JPG',
      '/src/assets/Images/2024-Val-Thorens/Arne 2.JPG',
      '/src/assets/Images/2024-Val-Thorens/Maarten 1.JPG',
      '/src/assets/Images/2024-Val-Thorens/Start race Arne.JPG',
      '/src/assets/Images/2024-Val-Thorens/Vlagceremonie .JPG'
    ],
    imageCount: 10,
    highlights: [
      'Deelname aan internationale wedstrijden',
      'Prachtige Alpiene omgeving',
      'Arne en Maarten in actie',
      'Fun races en sprongen',
      'Professionele fotografie',
      'Vlagceremonie en awards'
    ]
  },
  {
    id: 'polarion-2024',
    title: 'Polarion Evenement',
    year: '2024',
    shortDescription: 'Spektakulaire show met freestyle en artistieke elementen',
    description: 'Het Polarion evenement was een waar spektakel van schaatskunst en atletiek. Onze leden, waaronder Cedric, Maarten en Tristan, lieten indrukwekkende prestaties zien met 360° sprongen, schansen en freestyle elementen. Het evenement op 18 april was een Freestyle Night die lang zal worden herinnerd door iedereen die erbij was. De professionele opzet en de uitstekende prestaties van onze schaatsers maakten dit tot een onvergetelijke avond.',
    mainImage: '/src/assets/Images/2024-Polarion/IMG_4117_Freestyle Night-18april.JPG',
    images: [
      '/src/assets/Images/2024-Polarion/IMG_4117_Freestyle Night-18april.JPG',
      '/src/assets/Images/2024-Polarion/cedric polarion.jpg',
      '/src/assets/Images/2024-Polarion/maarten 360.jpg',
      '/src/assets/Images/2024-Polarion/trsitan schans.jpg',
      '/src/assets/Images/2024-Polarion/boven onder polarion.jpg',
      '/src/assets/Images/2024-Polarion/DSC_5465.jpg',
      '/src/assets/Images/2024-Polarion/DSC_5643.jpg',
      '/src/assets/Images/2024-Polarion/IMG_1418.JPG',
      '/src/assets/Images/2024-Polarion/IMG_4087.JPG'
    ],
    imageCount: 9,
    highlights: [
      'Freestyle Night op 18 april',
      'Spectaculaire 360° sprongen van Maarten',
      'Cedric\'s indrukwekkende prestaties',
      'Tristan op de schans',
      'Professionele fotografie',
      'Artistieke en technische elementen gecombineerd'
    ]
  },
  {
    id: 'oostenrijk-2025',
    title: 'Oostenrijk Trip',
    year: '2025',
    shortDescription: 'Recente reis naar de Oostenrijkse bergen',
    description: 'Onze nieuwste reis naar Oostenrijk was weer een groot succes. In de prachtige Oostenrijkse bergen hebben onze leden kunnen genieten van uitstekende omstandigheden en hebben ze hun vaardigheden verder kunnen ontwikkelen. De sfeer was fantastisch en iedereen heeft volop kunnen genieten van deze mooie ervaring in de sneeuw.',
    mainImage: '/src/assets/Images/2025-Oostenrijk/IMG_6042.JPG',
    images: [
      '/src/assets/Images/2025-Oostenrijk/IMG_6042.JPG',
      '/src/assets/Images/2025-Oostenrijk/IMG_6043.JPG',
      '/src/assets/Images/2025-Oostenrijk/IMG_6044.JPG',
      '/src/assets/Images/2025-Oostenrijk/IMG_6045.JPG',
      '/src/assets/Images/2025-Oostenrijk/IMG_6063.JPG',
      '/src/assets/Images/2025-Oostenrijk/IMG_6074.JPG',
      '/src/assets/Images/2025-Oostenrijk/3708feff-bb09-4432-9dca-dd1b8887734a.JPG',
      '/src/assets/Images/2025-Oostenrijk/656f572c-116e-47cd-8f1a-fdc7165513a6.JPG',
      '/src/assets/Images/2025-Oostenrijk/f22fe6b3-36bf-4868-81aa-ceb687d7e060.JPG'
    ],
    imageCount: 9,
    highlights: [
      'Prachtige Oostenrijkse berglandschappen',
      'Uitstekende sneeuw- en ijscondities',
      'Geweldige groepssfeer',
      'Nieuwe ervaringen en uitdagingen',
      'Professionele begeleiding'
    ]
  }
]

// Methods
const loadEvent = () => {
  const eventId = route.params.id
  const foundEvent = events.find(e => e.id === eventId)
  
  if (foundEvent) {
    event.value = foundEvent
    currentImageIndex.value = 0
  } else {
    // Redirect to events page if event not found
    router.push('/events')
  }
}

const nextImage = () => {
  if (event.value && event.value.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % event.value.images.length
  }
}

const previousImage = () => {
  if (event.value && event.value.images.length > 0) {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? event.value.images.length - 1 
      : currentImageIndex.value - 1
  }
}

// Auto-slide functionality (optional)
let autoSlideInterval = null
const startAutoSlide = () => {
  if (event.value && event.value.images.length > 1) {
    autoSlideInterval = setInterval(() => {
      nextImage()
    }, 5000) // 5 seconds
  }
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

// Lifecycle
onMounted(() => {
  loadEvent()
  startAutoSlide()
})

// Watch for route changes
watch(() => route.params.id, () => {
  if (route.name === 'event-detail') {
    loadEvent()
    currentImageIndex.value = 0
    stopAutoSlide()
    startAutoSlide()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  stopAutoSlide()
})
</script>

<style scoped>
.ice-glide {
  animation: ice-glide 0.8s ease-out forwards;
}

@keyframes ice-glide {
  0% { transform: translateY(-50px) rotate(-2deg); opacity: 0; }
  100% { transform: translateY(0) rotate(0deg); opacity: 1; }
}

/* Slide transition */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%);
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

/* Navigation button styling */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

/* Thumbnail styling */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}

.overflow-x-auto::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb {
  background: rgba(255, 237, 78, 0.6);
  border-radius: 3px;
}

.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 237, 78, 0.8);
}

/* Enhanced hover effects */
.bg-black.bg-opacity-30:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .flex.space-x-2 {
    gap: 0.375rem;
  }
  
  button[class*="w-20 h-20"] {
    width: 4rem;
    height: 4rem;
  }
}
</style>
