<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-8 text-xtreme-yellow ice-glide">
          Evenementen
        </h1>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Ontdek ons complete schema met trainingen en speciale evenementen voor het seizoen 2025-2026
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>

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