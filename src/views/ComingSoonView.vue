<template>
  <main class="bg-xtreme-gradient px-4 pt-0 pb-0">
    <section class="mx-auto max-w-4xl rounded-[2rem] border border-xtreme-yellow/20 bg-xtreme-black/95 p-10 shadow-2xl backdrop-blur-xl animate-glow before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_35%)] before:rounded-[2rem] relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.06),transparent_18%)] opacity-60"></div>
      <div class="absolute -right-6 top-20 h-44 w-44 rounded-full bg-xtreme-yellow/20 blur-3xl opacity-80"></div>
      <div class="absolute left-10 bottom-10 h-28 w-28 rounded-full bg-xtreme-yellow/10 blur-3xl opacity-70"></div>
      <div class="space-y-8 relative">
        <div class="text-sm uppercase tracking-[0.35em] text-xtreme-yellow text-center">Xtreme On Ice Kampioenschap</div>

        <div class="space-y-4 text-center">
          <h1 class="text-4xl font-heading font-bold text-white">Coming Soon</h1>
        </div>

        <div class="relative">
          <div class="absolute -top-6 left-6 h-16 w-16 rounded-full bg-xtreme-yellow/20 blur-2xl opacity-90 animate-glow-orb"></div>
          <div class="rounded-[1.75rem] border border-xtreme-yellow/10 bg-xtreme-yellow/10 p-6 shadow-xl shadow-xtreme-yellow/10 backdrop-blur-md">
            <p class="text-xs uppercase tracking-[0.35em] text-xtreme-yellow/80 text-center">Volgende update</p>
            <p class="mt-3 text-2xl font-semibold text-white text-center">Binnenkort</p>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script setup>
</script>

<style scoped>
@keyframes glow {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.05); opacity: 0.95; }
}

@keyframes pulse-card {
  0%, 100% { transform: translateY(0); box-shadow: 0 20px 60px rgba(255, 201, 51, 0.14); }
  50% { transform: translateY(-3px); box-shadow: 0 28px 80px rgba(255, 201, 51, 0.2); }
}

@keyframes glow-orb {
  0%, 100% { transform: scale(1); opacity: 0.75; }
  50% { transform: scale(1.35); opacity: 0.35; }
}

.animate-glow {
  animation: glow 5s ease-in-out infinite;
}

.animate-pulse-card {
  animation: pulse-card 4.5s ease-in-out infinite;
}

.animate-glow-orb {
  animation: glow-orb 4s ease-in-out infinite;
}
</style>
