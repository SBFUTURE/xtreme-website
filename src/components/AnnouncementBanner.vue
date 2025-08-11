<template>
  <section class="relative bg-gradient-to-r from-xtreme-yellow to-amber-300 text-black py-4 px-4 announcement-banner">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-center text-center space-x-4">
        <div class="animate-pulse text-2xl">🎉</div>
        <div class="flex-1">
          <p class="font-heading font-bold text-lg sm:text-xl">
            <span class="text-red-600">NIEUW EVENEMENT!</span> 
            <span class="mx-2">•</span>
            <span class="text-black">XTREME NIGHT 6</span>
            <span class="mx-2">•</span>
            <span class="text-red-600">21 FEBRUARI 2025</span>
          </p>
          <p class="text-sm font-medium mt-1 text-gray-800">
            Mis de meest spectaculaire ijsshow van het jaar niet! Tickets binnenkort beschikbaar.
          </p>
        </div>
        <div class="animate-pulse text-2xl">🎉</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AnnouncementBanner'
}
</script>

<style scoped>
.announcement-banner {
  position: relative;
  z-index: 10;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 237, 78, 0.8);
}

.announcement-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 237, 78, 0.1) 0%,
    rgba(255, 237, 78, 0.05) 50%,
    rgba(255, 237, 78, 0.1) 100%
  );
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@media (max-width: 640px) {
  .announcement-banner p {
    font-size: 0.875rem;
  }
  
  .announcement-banner .text-lg {
    font-size: 1rem;
  }
}
</style>
