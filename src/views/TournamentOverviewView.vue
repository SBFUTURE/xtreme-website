<template>
  <main class="min-h-screen bg-xtreme-gradient py-6 md:py-8">
    <div class="max-w-5xl mx-auto px-6">
       <ComingSoonView />
      <div class="mt-4 mb-8 md:mt-5">
        <div class="ice-card p-5 md:p-7">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div class="flex-1">
              <p class="text-xs uppercase tracking-[0.2em] text-xtreme-yellow mb-2">Spelreglement</p>
              <h2 class="text-2xl md:text-3xl text-white mb-2">Alles over de competities en regels</h2>
              <p class="text-sm md:text-base text-slate-300 leading-relaxed">
                Ontdek alle wedstrijddagen, disciplines, categorieën, puntensystemen en voorwaarden van het kampioenschap.
              </p>
            </div>

            <div class="flex-shrink-0">
              <router-link to="/spelreglement" class="btn-primary">
                Bekijk het spelreglement
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
import ComingSoonView from './ComingSoonView.vue'
</script>

<style scoped>
.ice-card {
  background: rgba(10, 14, 23, 0.78);
  border: 1px solid rgba(255, 237, 78, 0.28);
  border-radius: 1rem;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(4px);
}

.btn-primary {
  padding: 0.9rem 1.5rem;
  background: linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%);
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 10px 28px rgba(255, 237, 78, 0.22);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  line-height: 1.2;
}

.btn-primary:hover {
  box-shadow: 0 14px 30px rgba(255, 237, 78, 0.28);
  transform: translateY(-1px);
}

@media (max-width: 640px) {
  .btn-primary {
    width: 100%;
  }
}
</style>
