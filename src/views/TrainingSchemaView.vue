<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Training Calendar Component -->
    <section class="pb-20 px-4">
      <TrainingCalendar />
    </section>
  </div>
</template>

<script setup>
import TrainingCalendar from '@/components/TrainingCalendar.vue'
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