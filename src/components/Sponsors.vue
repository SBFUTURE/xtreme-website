<template>
  <section class="py-16 px-4 bg-xtreme-dark bg-opacity-30">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-heading font-bold mb-6 text-xtreme-yellow">
          Onze Sponsors
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Met dank aan onze geweldige sponsors die Xtreme On Ice mogelijk maken
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 items-center">
        <div 
          v-for="sponsor in sponsors" 
          :key="sponsor.name"
          class="sponsor-card group"
        >
          <div class="bg-white bg-opacity-90 rounded-lg p-6 flex items-center justify-center h-24 transition-all duration-300 hover:bg-opacity-100 hover:shadow-lg hover:scale-105">
            <img 
              v-if="sponsor.logo"
              :src="sponsor.logo" 
              :alt="sponsor.name + ' logo'" 
              class="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div v-else class="text-gray-600 font-bold text-sm text-center">
              {{ sponsor.name }}
            </div>
          </div>
          <p class="text-center text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ sponsor.type }}
          </p>
        </div>
      </div>

      <div class="text-center mt-12">
        <p class="text-gray-400 text-sm mb-4">
          Wilt u ook sponsor worden van Xtreme On Ice?
        </p>
        <router-link 
          to="/contact"
          class="inline-flex items-center bg-xtreme-yellow text-black px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:bg-xtreme-light-yellow hover:scale-105"
        >
          Neem Contact Op
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const sponsors = ref([
  {
    name: 'Gemeente Liedekerke',
    type: 'Hoofdsponsor',
    logo: null // Placeholder - echte logo's kunnen later worden toegevoegd
  },
  {
    name: 'Sportcentrum Liedekerke',
    type: 'Faciliteitenpartner',
    logo: null
  },
  {
    name: 'IJsbaan Partners',
    type: 'Materiaalpartner',
    logo: null
  },
  {
    name: 'Lokale Ondernemers',
    type: 'Sponsor',
    logo: null
  },
  {
    name: 'Sport Vlaanderen',
    type: 'Subsidieverstrekker',
    logo: null
  },
  {
    name: 'Gemeenschapscentrum',
    type: 'Partner',
    logo: null
  }
])
</script>

<style scoped>
.sponsor-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.sponsor-card:nth-child(1) { animation-delay: 0.1s; }
.sponsor-card:nth-child(2) { animation-delay: 0.2s; }
.sponsor-card:nth-child(3) { animation-delay: 0.3s; }
.sponsor-card:nth-child(4) { animation-delay: 0.4s; }
.sponsor-card:nth-child(5) { animation-delay: 0.5s; }
.sponsor-card:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .sponsor-card .bg-white {
    padding: 1rem;
    height: 5rem;
  }
  
  .sponsor-card img {
    max-height: 3rem;
  }
}
</style>
