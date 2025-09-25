<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Training Calendar Component -->
    <section class="pb-20 px-4">
      <TrainingCalendar />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import TrainingCalendar from '@/components/TrainingCalendar.vue'

onMounted(() => {
  document.title = 'Trainingen bij Xtreme On Ice | Trainingsschema & Informatie';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Bekijk het trainingsschema van Xtreme On Ice en plan je schaatstrainingen. Alle informatie over tijden, niveaus en inschrijving.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Bekijk het trainingsschema van Xtreme On Ice en plan je schaatstrainingen. Alle informatie over tijden, niveaus en inschrijving.';
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
</style>