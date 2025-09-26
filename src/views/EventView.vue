<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Announcement Banner -->
    <AnnouncementBanner />
    
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-8 text-xtreme-yellow ice-glide">
          Evenementen
        </h1>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Ontdek onze geweldige schaatsevenementen en belevenissen die Xtreme On Ice heeft meegemaakt
        </p>
      </div>
    </section>

    <!-- Featured Event: Xtreme Night 5 -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <div class="inline-flex items-center bg-xtreme-yellow text-black px-4 py-2 rounded-full font-bold text-sm mb-4">
            🏆 ONZE TROTS
          </div>
          <h2 class="text-4xl lg:text-5xl font-heading font-bold text-xtreme-yellow mb-4">
            Xtreme Night 5
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Ons eigen georganiseerde evenement - De kroon op ons werk als ijsvereniging
          </p>
        </div>

        <router-link 
          :to="`/events/xtreme-night-5`"
          class="featured-event-card block"
        >
          <div class="relative overflow-hidden rounded-2xl bg-black group cursor-pointer">
            <div class="relative h-[400px] lg:h-[500px]">
              <img 
                src="/Images/2025-Xtreme-Night-5/IMG_6260.JPG"
                alt="Xtreme Night 5 evenement" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
            <div class="absolute bottom-8 left-8 right-8 text-white">
              <div class="flex items-center mb-4">
                <div class="bg-xtreme-yellow text-black px-3 py-1 rounded-full font-bold text-sm mr-4">
                  2025
                </div>
                <div class="text-xtreme-yellow font-semibold">
                  🎉 Door Ons Georganiseerd
                </div>
              </div>
              <h3 class="text-4xl font-heading font-bold text-xtreme-yellow mb-4">
                Xtreme Night 5
              </h3>
              <p class="text-lg text-gray-200 max-w-2xl">
                Onze vijfde editie van Xtreme Night was een groot succes! Een avond vol spectaculaire optredens, 
                geweldige sfeer en onvergetelijke momenten op het ijs.
              </p>
              <div class="mt-4 text-xtreme-yellow font-semibold">
                Bekijk alle foto's en details →
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </section>

    <!-- Other Events Grid -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6 text-xtreme-yellow">
            Onze Evenementen
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Van lokale wedstrijden tot internationale trips - bekijk waar Xtreme On Ice allemaal is geweest
          </p>
        </div>

        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <router-link 
            v-for="event in otherEvents" 
            :key="event.id"
            :to="`/events/${event.id}`"
            class="event-card group cursor-pointer block"
          >
            <div class="relative overflow-hidden rounded-xl bg-black">
              <div class="relative h-64">
                <img 
                  :src="event.mainImage" 
                  :alt="event.title + ' evenement'" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div class="absolute top-4 left-4">
                <div class="bg-xtreme-yellow text-black px-3 py-1 rounded-full font-bold text-sm">
                  {{ event.year }}
                </div>
              </div>
              <div class="absolute bottom-4 left-4 right-4 text-white">
                <h3 class="text-2xl font-heading font-bold text-xtreme-yellow mb-2">
                  {{ event.title }}
                </h3>
                <p class="text-sm text-gray-200 mb-2">
                  {{ event.shortDescription }}
                </p>
                <div class="flex items-center text-xs text-xtreme-yellow">
                  <span>{{ event.imageCount }} foto's</span>
                  <span class="ml-2">→</span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Add canonical tag for SEO
if (typeof window !== 'undefined') {
  const canonicalUrl = 'https://xtremeonice.be/events';
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    document.head.appendChild(link);
  } else {
    link.href = canonicalUrl;
  }
}
import { ref, computed, onMounted } from 'vue'
import AnnouncementBanner from '@/components/AnnouncementBanner.vue'

// Event data with fixed image paths
const events = ref([
  {
    id: 'xtreme-night-5',
    title: 'Xtreme Night 5',
    year: '2025',
    shortDescription: 'Ons eigen georganiseerde spectaculaire schaatsevenement',
  mainImage: '/Images/2025-Xtreme-Night-5/IMG_6260.JPG',
    imageCount: 3
  },
  {
    id: 'val-thorens-2024',
    title: 'Val Thorens Trip',
    year: '2024',
    shortDescription: 'Onvergetelijke wintersportervaring in de Franse Alpen',
  mainImage: '/Images/2024-Val-Thorens/PaulComShoot109.jpg',
    imageCount: 10
  },
  {
    id: 'polarion-2024',
    title: 'Polarion Evenement',
    year: '2024',
    shortDescription: 'Spektakulaire show met freestyle en artistieke elementen',
  mainImage: '/Images/2024-Polarion/IMG_4117_Freestyle Night-18april.JPG',
    imageCount: 9
  },
  {
    id: 'oostenrijk-2025',
    title: 'Oostenrijk Trip',
    year: '2025',
    shortDescription: 'Recente reis naar de Oostenrijkse bergen',
  mainImage: '/Images/2025-Oostenrijk/IMG_6042.JPG',
    imageCount: 9
  }
])

// Computed property for other events (excluding Xtreme Night 5)
const otherEvents = computed(() => {
  return events.value.filter(event => event.id !== 'xtreme-night-5')
})

// SEO Meta Tags
onMounted(() => {
  document.title = 'Evenementen bij Xtreme On Ice | Schaatsactiviteiten & Events';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Ontdek alle evenementen en schaatsactiviteiten van Xtreme On Ice. Doe mee aan onze events en beleef het plezier op het ijs!');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Ontdek alle evenementen en schaatsactiviteiten van Xtreme On Ice. Doe mee aan onze events en beleef het plezier op het ijs!';
    document.head.appendChild(meta);
  }
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

/* Featured Event Styling */
.featured-event-card {
  transition: all 0.4s ease;
  position: relative;
}

.featured-event-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 25px 50px rgba(255, 237, 78, 0.3),
    0 0 30px rgba(255, 237, 78, 0.2);
}

.featured-event-card::before {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  background: linear-gradient(45deg, 
    rgba(255, 237, 78, 0.6), 
    rgba(255, 237, 78, 0.2), 
    rgba(255, 237, 78, 0.6)
  );
  border-radius: 1rem;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.featured-event-card:hover::before {
  opacity: 1;
}

.featured-event-card .group:hover .absolute.bottom-8 {
  transform: translateY(-10px);
  transition: all 0.4s ease;
}

/* Event Card Styling */
.event-card {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(8px);
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 237, 78, 0.2);
  transition: all 0.3s ease;
  overflow: hidden;
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  text-decoration: none;
}

.event-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 
    0 12px 40px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(255, 237, 78, 0.3);
  background: rgba(0, 0, 0, 0.6);
}

.event-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 237, 78, 0.1), 
    transparent
  );
  transition: left 0.5s ease;
  z-index: 1;
}

.event-card:hover::before {
  left: 100%;
}

/* Animation delays for staggered entrance */
.event-card:nth-child(1) { animation-delay: 0.1s; }
.event-card:nth-child(2) { animation-delay: 0.2s; }
.event-card:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Enhanced button styling */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .featured-event-card {
    margin-bottom: 2rem;
  }
  
  .event-card {
    margin-bottom: 1rem;
  }
}
</style>