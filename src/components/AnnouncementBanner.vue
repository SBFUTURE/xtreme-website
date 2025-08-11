<template>
  <section class="bg-gradient-to-r from-xtreme-yellow to-amber-300 text-black py-2 md:py-3 lg:py-4 px-2 md:px-4 announcement-banner">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center justify-center text-center space-x-2 md:space-x-4">
        <div class="animate-pulse text-lg md:text-xl lg:text-2xl">🎉</div>
        <div class="flex-1">
          <p class="font-heading font-bold text-sm md:text-base lg:text-lg xl:text-xl">
            <span class="text-red-600">NIEUW EVENEMENT!</span> 
            <span class="mx-1 md:mx-2">•</span>
            <span class="text-black">XTREME NIGHT 6</span>
            <span class="mx-1 md:mx-2">•</span>
            <span class="text-red-600">21 FEBRUARI 2025</span>
          </p>
          <p class="text-xs md:text-sm font-medium mt-0.5 md:mt-1 text-gray-800 hidden sm:block">
            Mis de meest spectaculaire ijsshow van het jaar niet! Tickets binnenkort beschikbaar.
          </p>
        </div>
        <div class="animate-pulse text-lg md:text-xl lg:text-2xl">🎉</div>
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
  position: sticky;
  top: 80px;
  z-index: 999;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border-bottom: 2px solid rgba(255, 237, 78, 0.8);
  backdrop-filter: blur(10px);
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
  .announcement-banner {
    top: 80px; /* Same as nav height (h-20 = 80px) */
    z-index: 999; /* Very high to ensure it's always on top */
  }
  
  .announcement-banner p {
    line-height: 1.2;
  }
}

@media (max-width: 768px) {
  .announcement-banner {
    top: 80px; /* Consistent with nav height for tablets */
    z-index: 999;
  }
}

@media (max-width: 480px) {
  .announcement-banner {
    font-size: 0.75rem;
  }
  
  .announcement-banner .text-sm {
    font-size: 0.7rem;
  }
  
  .announcement-banner .font-bold {
    font-size: 0.8rem;
  }
}
</style>
