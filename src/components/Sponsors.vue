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
              :class="[
                'sponsor-logo transition-all duration-300 group-hover:scale-105',
                sponsor.name === 'Andy Du Bois' || sponsor.name === 'B-Tech Security' || sponsor.name === 'Gloss & Gossip' ? 'sponsor-logo-large' : ''
              ]"
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
          name: 't-blade',
          type: 'Hoofdsponsor',
          logo: '/Images/Sponsors/t-blade-logo.png'
        },
        {
          name: 'Grondwerken Geert Michiels',
          type: 'Hoofdsponsor',
          logo: '/Images/Sponsors/Geert_Michiels.png'
        },
        {
          name: 'Andy Du Bois',
          type: 'Hoofdsponsor',
          logo: '/Images/Sponsors/AndyDuBois.jpg'
        },
        {
          name: 'B-Tech Security',
          type: 'Hoofdsponsor',
          logo: '/Images/Sponsors/B-Tech-Security.jpg'
        },
        {
          name: 'CB IT',
          type: 'Sponsor',
          logo: '/Images/Sponsors/CB_IT.png'
        },
        {
          name: 'DJ BOMBEKO',
          type: 'Sponsor',
          logo: '/Images/Sponsors/DJ_BOMBEKO_BLACK.png'
        },
        {
          name: 'Gloss & Gossip',
          type: 'Sponsor',
          logo: '/Images/Sponsors/Gloss&Gossip.png'
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
  padding: 1.25rem;
  height: 12rem;
  min-width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.sponsor-logo {
  max-height: 8rem;
  min-height: 4rem;
  max-width: 90%;
  width: auto;
  object-fit: contain;
  margin: 0 auto;
  display: block;
}

.sponsor-logo-large {
  max-height: 11rem !important;
  min-height: 6rem !important;
  max-width: 100% !important;
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


@media (max-width: 1024px) {
  .ice-card-sponsor {
    height: 9rem;
    padding: 1rem;
  }
  .sponsor-logo {
    max-height: 6rem;
    min-height: 3rem;
  }
  .sponsor-logo-large {
    max-height: 8rem !important;
    min-height: 4rem !important;
  }
}


@media (max-width: 768px) {
  .sponsor-card {
    min-width: 180px;
    max-width: 220px;
  }
  .ice-card-sponsor {
    height: 7rem;
    padding: 0.75rem;
  }
  .sponsor-logo {
    max-height: 4rem;
    min-height: 2rem;
  }
  .sponsor-logo-large {
    max-height: 5.5rem !important;
    min-height: 2.5rem !important;
  }
}



@media (max-width: 480px) {
  .sponsor-card {
    min-width: 160px;
    max-width: 220px;
  }
  .ice-card-sponsor {
    height: 7rem;
    padding: 0.7rem;
  }
  .sponsor-logo {
    max-height: 4.2rem;
    min-height: 2.2rem;
    max-width: 95%;
  }
  .sponsor-logo-large {
    max-height: 5.5rem !important;
    min-height: 2.5rem !important;
    max-width: 100% !important;
  }
}
</style>
