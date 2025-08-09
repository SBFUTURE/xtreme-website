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
        <div class="max-w-7xl mx-auto">
          <div class="relative">
            <!-- Image Slider -->
            <div class="relative overflow-hidden rounded-2xl bg-black group">
              <div class="image-container relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-black">
                <transition name="slide-fade" mode="out-in">
                  <img 
                    :key="currentImageIndex"
                    :src="event.images[currentImageIndex]" 
                    :alt="event.title + ' - foto ' + (currentImageIndex + 1)" 
                    class="max-w-full max-h-full object-contain"
                  />
                </transition>
                
                <!-- Navigation Arrows -->
                <button 
                  @click="previousImage"
                  class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all backdrop-blur-sm text-xl font-bold"
                  v-show="event.images.length > 1"
                >
                  ‹
                </button>
                <button 
                  @click="nextImage"
                  class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-90 transition-all backdrop-blur-sm text-xl font-bold"
                  v-show="event.images.length > 1"
                >
                  ›
                </button>

                <!-- Image Counter -->
                <div class="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm font-semibold">
                  {{ currentImageIndex + 1 }} / {{ event.images.length }}
                </div>

              </div>
            </div>

            <!-- Thumbnail Navigation with proper spacing -->
            <div v-if="event.images.length > 1" class="mt-8">
              <div class="flex justify-center space-x-3 overflow-x-auto pb-4 pt-6 px-4">
                <button
                  v-for="(image, index) in event.images"
                  :key="index"
                  @click="currentImageIndex = index"
                  :class="[
                    'flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 bg-black',
                    currentImageIndex === index 
                      ? 'border-xtreme-yellow shadow-lg scale-110' 
                      : 'border-gray-500 hover:border-xtreme-yellow hover:border-opacity-70 hover:scale-105'
                  ]"
                >
                  <img 
                    :src="image" 
                    :alt="event.title + ' - thumbnail ' + (index + 1)"
                    class="w-full h-full object-cover object-center"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Enhanced Event Details -->
      <section class="py-20 px-4 bg-gradient-to-b from-transparent via-xtreme-dark via-opacity-10 to-transparent">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-16">
            <h2 class="text-5xl lg:text-6xl font-heading font-bold text-xtreme-yellow mb-6">
              Event Story
            </h2>
            <div class="w-24 h-1 bg-gradient-to-r from-transparent via-xtreme-yellow to-transparent mx-auto mb-4"></div>
            <p class="text-xl text-gray-400 max-w-2xl mx-auto">
              Ontdek het verhaal achter dit spectaculaire evenement
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-12 items-stretch">
            <!-- Main Description Card -->
            <div class="bg-gradient-to-br from-xtreme-dark to-black rounded-3xl p-12 shadow-2xl border-2 border-xtreme-yellow border-opacity-30 relative overflow-hidden">
              <!-- Decorative background -->
              <div class="absolute top-0 right-0 w-32 h-32 bg-xtreme-yellow opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-xtreme-yellow opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div class="relative z-10">
                <div class="flex items-center mb-10">
                  <div class="w-20 h-20 bg-gradient-to-br from-xtreme-yellow to-xtreme-light-yellow rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                    <span class="text-4xl">📖</span>
                  </div>
                  <div>
                    <h3 class="text-3xl font-heading font-bold text-xtreme-yellow mb-2">Het Verhaal</h3>
                    <p class="text-gray-400">Achter de schermen</p>
                  </div>
                </div>
                
                <div class="bg-black bg-opacity-40 rounded-2xl p-8 border border-xtreme-yellow border-opacity-20 backdrop-blur-sm">
                  <p class="text-gray-100 text-xl leading-relaxed font-light">
                    {{ event.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Highlights Card -->
            <div v-if="event.highlights && event.highlights.length > 0" class="bg-gradient-to-br from-xtreme-dark to-black rounded-3xl p-12 shadow-2xl border-2 border-xtreme-yellow border-opacity-30 relative overflow-hidden">
              <!-- Decorative background -->
              <div class="absolute top-0 left-0 w-28 h-28 bg-xtreme-yellow opacity-5 rounded-full -translate-y-14 -translate-x-14"></div>
              <div class="absolute bottom-0 right-0 w-20 h-20 bg-xtreme-yellow opacity-5 rounded-full translate-y-10 translate-x-10"></div>
              
              <div class="relative z-10">
                <div class="flex items-center mb-10">
                  <div class="w-20 h-20 bg-gradient-to-br from-xtreme-yellow to-xtreme-light-yellow rounded-2xl flex items-center justify-center mr-6 shadow-xl">
                    <span class="text-4xl">🌟</span>
                  </div>
                  <div>
                    <h3 class="text-3xl font-heading font-bold text-xtreme-yellow mb-2">Hoogtepunten</h3>
                    <p class="text-gray-400">De beste momenten</p>
                  </div>
                </div>
                
                <div class="space-y-5">
                  <div 
                    v-for="(highlight, index) in event.highlights" 
                    :key="highlight"
                    class="group bg-gradient-to-r from-xtreme-yellow from-opacity-10 to-transparent rounded-2xl p-6 transition-all duration-300 hover:from-opacity-20 border-l-4 border-xtreme-yellow hover:border-xtreme-light-yellow transform hover:translate-x-2 hover:shadow-lg"
                  >
                    <div class="flex items-start">
                      <div class="w-10 h-10 bg-xtreme-yellow rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span class="text-black font-bold text-lg">{{ index + 1 }}</span>
                      </div>
                      <span class="text-gray-100 text-lg font-medium group-hover:text-white transition-colors duration-300">{{ highlight }}</span>
                    </div>
                  </div>
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
      '/src/assets/Images/2025-Xtreme-Night-5/IMG_6260.JPG',
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

// Keyboard navigation
const handleKeyPress = (event) => {
  if (event.key === 'ArrowLeft') {
    previousImage()
  } else if (event.key === 'ArrowRight') {
    nextImage()
  }
}

// Add keyboard event listeners
const addKeyboardListeners = () => {
  document.addEventListener('keydown', handleKeyPress)
}

const removeKeyboardListeners = () => {
  document.removeEventListener('keydown', handleKeyPress)
}

// Lifecycle
onMounted(() => {
  loadEvent()
  startAutoSlide()
  addKeyboardListeners()
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
  removeKeyboardListeners()
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

/* Enhanced image container */
.image-container {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
}

/* Better image display - ensure all images fit within fixed dimensions */
.image-container img {
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
}

/* Force consistent background for images */
.image-container::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: -1;
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

/* Custom opacity classes for gradients */
.from-opacity-10 {
  --tw-gradient-from: rgba(255, 237, 78, 0.1);
}

.from-opacity-20 {
  --tw-gradient-from: rgba(255, 237, 78, 0.2);
}

.via-opacity-10 {
  --tw-gradient-to: rgba(38, 38, 38, 0.1);
}

.via-opacity-5 {
  --tw-gradient-to: rgba(255, 237, 78, 0.05);
}

/* Navigation button styling */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

/* Thumbnail styling with proper spacing */
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
  .text-3xl {
    font-size: 1.75rem;
  }
  
  h2 {
    font-size: 2.5rem;
  }
  
  /* Thumbnail adjustments for mobile */
  .flex.space-x-3 {
    gap: 0.5rem;
  }
  
  button[class*="w-20 h-20"] {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  /* Extra padding for mobile thumbnails */
  .pt-6 {
    padding-top: 2rem;
  }
}
</style>
