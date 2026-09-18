<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-8 text-xtreme-yellow ice-glide">
          Over Xtreme On Ice
        </h1>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Ontdek het verhaal achter onze ijsvereniging en wat ons zo bijzonder maakt
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 px-4 history-section">
      <div class="max-w-5xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="ice-card">
            <h2 class="text-3xl font-heading font-bold mb-6 text-xtreme-yellow">
              Onze Geschiedenis
            </h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Xtreme On Ice is ontstaan uit een passie voor schaatsen en de wens om deze sport toegankelijk 
              te maken voor iedereen in Liedekerke en omgeving. Sinds onze oprichting zijn we uitgegroeid tot 
              een gerespecteerde ijsvereniging die bekend staat om zijn professionele begeleiding en 
              gezellige sfeer.
            </p>
            <p class="text-gray-300 leading-relaxed">
              We geloven dat schaatsen meer is dan alleen een sport - het is een manier om samen te komen, 
              jezelf uit te dagen en plezier te hebben op het ijs.
            </p>
          </div>
          
          <div class="flex justify-center">
            <img 
              src="/Images/XtremeLogo.jpg" 
              alt="Xtreme On Ice Logo" 
              class="w-64 h-64 rounded-full shadow-ice border-4 border-xtreme-yellow animate-float"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Crew Section -->
    <section class="py-16 px-4 crew-section">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-heading font-bold mb-4 text-xtreme-yellow">
            The crew
          </h2>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Maak kennis met het team dat zich elke dag inzet voor Xtreme On Ice.
          </p>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <article v-for="member in crewMembers" :key="member.name" class="ice-card crew-card">
            <div class="crew-photo" :aria-label="`Fotoplaats voor ${member.name}`">
              <img
                :src="member.photo"
                :alt="`Foto van ${member.name}`"
                :style="{ objectPosition: member.objectPosition }"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 639px) 40vw, (max-width: 1023px) 30vw, 10rem"
              />
            </div>
            <div class="text-center">
              <h3 class="text-base sm:text-xl font-heading font-bold text-xtreme-yellow mb-2">
                {{ member.name }}
              </h3>
              <p class="text-gray-300">{{ member.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 px-4 mission-section bg-xtreme-dark bg-opacity-50">
      <div class="max-w-4xl mx-auto text-center">
        <div class="ice-card">
          <h2 class="text-4xl font-heading font-bold mb-8 text-xtreme-yellow">
            Onze Missie
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed">
            Xtreme On Ice streeft ernaar om schaatsen toegankelijk te maken voor alle leeftijden en 
            vaardigheidsniveaus. We bieden een veilige, professionele en inspirerende omgeving waar 
            iedereen kan genieten van de prachtige sport van het schaatsen, terwijl we tegelijkertijd 
            een sterke gemeenschap opbouwen die gebaseerd is op respect, plezier en sportiviteit.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const crewMembers = [
  { name: 'Arne De Donder', role: 'Penningmeester / Trainer', photo: '/Images/The_Crew/arne_dd.jpg', objectPosition: '50% 18%' },
  { name: 'Maarten Michiels', role: 'Voorzitter / Trainer', photo: '/Images/The_Crew/maarten_m.jpeg', objectPosition: '50% 28%' },
  { name: 'Stephen Bombeke', role: 'Secretaris / Trainer', photo: '/Images/The_Crew/stephen_B.jpeg', objectPosition: '50% 22%' },
  { name: 'Tristan Van Valckenborgh', role: 'Materiaalmeester / Trainer', photo: '/Images/The_Crew/tristan_v.jpeg', objectPosition: '50% 48%' },
  { name: 'Ilana Du Bois', role: 'Content Creator / Trainer', photo: '/Images/The_Crew/ilana_db.jpeg', objectPosition: '50% 35%' },
  { name: 'Cedric Philipin', role: 'Trainer', photo: '/Images/The_Crew/cedric_ph.jpg', objectPosition: '50% 22%' },
]

// Add canonical tag for SEO
if (typeof window !== 'undefined') {
  const canonicalUrl = 'https://xtremeonice.be/about';
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
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Over Xtreme On Ice | Geschiedenis & Missie';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Lees alles over de geschiedenis, missie en waarden van Xtreme On Ice. Ontdek waarom onze ijsvereniging uniek is in België.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Lees alles over de geschiedenis, missie en waarden van Xtreme On Ice. Ontdek waarom onze ijsvereniging uniek is in België.';
    document.head.appendChild(meta);
  }
})
</script>

<style scoped>
.ice-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 237, 78, 0.3);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.ice-card:hover {
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
}

.history-section,
.crew-section,
.mission-section {
  position: relative;
  border-top: 1px solid rgba(255, 237, 78, 0.14);
}

.history-section {
  background: rgba(255, 255, 255, 0.02);
}

.crew-section {
  background: rgba(0, 0, 0, 0.18);
}

.mission-section {
  border-bottom: 1px solid rgba(255, 237, 78, 0.14);
}

.crew-card {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  height: 100%;
  min-width: 0;
  padding: 0.75rem;
}

.crew-photo {
  position: relative;
  aspect-ratio: 1;
  width: 100%;
  max-width: 10rem;
  margin: 0 auto;
  display: grid;
  place-items: center;
  border: 1px dashed rgba(255, 237, 78, 0.6);
  border-radius: 50%;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(255, 237, 78, 0.12), rgba(255, 255, 255, 0.04));
  color: rgba(255, 237, 78, 0.8);
  font-family: 'Oswald', sans-serif;
  font-size: 1.75rem;
  letter-spacing: 1px;
}

.crew-photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}

.crew-card h3,
.crew-card p {
  overflow-wrap: anywhere;
}

@media (min-width: 640px) {
  .crew-card {
    gap: 1rem;
    padding: 1.5rem;
  }

  .crew-photo {
    max-width: 13rem;
    font-size: 2.5rem;
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>
