<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-ice-gradient">
    <div class="ice-card text-center max-w-lg mx-auto">
      <h1 class="text-4xl font-heading font-bold text-xtreme-yellow mb-4">Inschrijving Ontvangen!</h1>
      <p class="text-lg text-gray-300 mb-6">Bedankt voor je inschrijving.<br>We nemen zo snel mogelijk contact met je op voor verdere informatie.</p>
      <router-link to="/" class="btn-primary">Terug naar Home</router-link>
    </div>
  </div>
</template>

<script setup>
// No logic needed
</script>

<style scoped>
.ice-card {
  background: rgba(26, 26, 26, 0.85);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 237, 78, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-primary {
  background: linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%);
  color: #000;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 237, 78, 0.4);
}
</style>
