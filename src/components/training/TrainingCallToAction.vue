<template>
  <div class="text-center mt-16">
    <div class="bg-xtreme-dark bg-opacity-70 rounded-2xl p-8 max-w-2xl mx-auto border border-xtreme-yellow border-opacity-30">
      <h3 class="text-2xl font-heading font-bold text-xtreme-yellow mb-4">
        Sluit je aan bij onze trainingen!
      </h3>
      <p class="text-gray-300 mb-6">
        Kom langs tijdens een van onze trainingsmomenten en ervaar de sfeer van Xtreme On Ice.
      </p>
      <router-link 
        to="/contact"
        class="inline-block px-6 py-3 bg-yellow-gradient text-black font-heading font-bold rounded-lg hover:shadow-ice transition-all duration-300 uppercase tracking-wide"
      >
        Schrijf je in
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrainingCallToAction'
}
</script>

<style scoped>
.yellow-gradient {
  background: linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%);
}
</style>
