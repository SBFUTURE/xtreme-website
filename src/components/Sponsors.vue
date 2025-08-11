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

      <div class="flex flex-wrap justify-center items-center gap-8">
        <div 
          v-for="sponsor in sponsors" 
          :key="sponsor.name"
          class="sponsor-card group"
        >
          <div class="ice-card-sponsor">
            <img 
              v-if="sponsor.logo"
              :src="sponsor.logo" 
              :alt="sponsor.name + ' logo'" 
              class="max-h-28 max-w-full object-contain transition-all duration-300 group-hover:scale-105"
            />
            <div v-else class="text-xtreme-yellow font-bold text-lg text-center">
              {{ sponsor.name }}
            </div>
          </div>
          <p class="text-center text-sm text-gray-400 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {{ sponsor.type }}
          </p>
        </div>
      </div>

      <div class="text-center mt-10">
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

<script>
export default {
  name: 'Sponsors',
  data() {
    return {
      sponsors: [
        {
          name: 'Grondwerken Geert Michiels',
          type: 'Hoofdsponsor',
          logo: '/src/assets/Images/sponsors/Geert_Michiels.png'
        },
      ]
    }
  }
}
</script>

<style scoped>
.sponsor-card {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  min-width: 280px;
  max-width: 320px;
}

.ice-card-sponsor {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 237, 78, 0.3);
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  padding: 0.75rem;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ice-card-sponsor:hover {
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
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
@media (max-width: 768px) {
  .sponsor-card {
    min-width: 240px;
    max-width: 280px;
  }
  
  .ice-card-sponsor {
    padding: 0.5rem;
    height: 7rem;
  }
  
  .sponsor-card img {
    max-height: 6rem;
  }
}

@media (max-width: 480px) {
  .sponsor-card {
    min-width: 200px;
    max-width: 240px;
  }
  
  .ice-card-sponsor {
    padding: 0.5rem;
    height: 6rem;
  }
  
  .sponsor-card img {
    max-height: 5rem;
  }
}
</style>
