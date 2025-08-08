<template>
  <nav class="bg-ice-gradient shadow-frost sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo Section -->
        <router-link to="/" class="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300">
          <div class="flex-shrink-0">
            <img 
              src="@/assets/Images/XtremeLogo.jpg" 
              alt="Xtreme On Ice Logo" 
              class="h-16 w-16 rounded-full shadow-ice border-2 border-xtreme-yellow frost-sparkle"
            />
          </div>
          <div class="hidden sm:block">
            <h1 class="text-2xl font-heading font-bold text-xtreme-yellow">
              Xtreme On Ice
            </h1>
            <p class="text-sm text-xtreme-light-yellow opacity-80">
              Ijsvereniging - België
            </p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <ul class="flex items-center space-x-8">
            <li>
              <router-link 
                to="/" 
                class="nav-link text-frost-white hover:text-xtreme-yellow transition-all duration-300 font-heading font-medium text-lg tracking-wide"
                active-class="text-xtreme-yellow border-b-2 border-xtreme-yellow"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link 
                to="/about" 
                class="nav-link text-frost-white hover:text-xtreme-yellow transition-all duration-300 font-heading font-medium text-lg tracking-wide"
                active-class="text-xtreme-yellow border-b-2 border-xtreme-yellow"
              >
                Over Ons
              </router-link>
            </li>
            <li>
              <router-link 
                to="/events" 
                class="nav-link text-frost-white hover:text-xtreme-yellow transition-all duration-300 font-heading font-medium text-lg tracking-wide"
                active-class="text-xtreme-yellow border-b-2 border-xtreme-yellow"
              >
                Evenementen
              </router-link>
            </li>
            <li>
              <router-link 
                to="/trainingskalender" 
                class="nav-link text-frost-white hover:text-xtreme-yellow transition-all duration-300 font-heading font-medium text-lg tracking-wide"
                active-class="text-xtreme-yellow border-b-2 border-xtreme-yellow"
              >
                Trainingskalender
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contact" 
                class="nav-link text-frost-white hover:text-xtreme-yellow transition-all duration-300 font-heading font-medium text-lg tracking-wide"
                active-class="text-xtreme-yellow border-b-2 border-xtreme-yellow"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-xtreme-yellow hover:text-xtreme-light-yellow focus:outline-none focus:text-xtreme-light-yellow transition-colors duration-300"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-xtreme-yellow border-opacity-30">
        <ul class="px-2 pt-2 pb-3 space-y-1 bg-xtreme-black bg-opacity-50">
          <li>
            <router-link 
              to="/" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-frost-white hover:text-xtreme-yellow hover:bg-xtreme-dark rounded-md transition-all duration-300 font-heading tracking-wide"
              active-class="text-xtreme-yellow bg-xtreme-dark"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link 
              to="/about" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-frost-white hover:text-xtreme-yellow hover:bg-xtreme-dark rounded-md transition-all duration-300 font-heading tracking-wide"
              active-class="text-xtreme-yellow bg-xtreme-dark"
            >
              Over Ons
            </router-link>
          </li>
          <li>
            <router-link 
              to="/events" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-frost-white hover:text-xtreme-yellow hover:bg-xtreme-dark rounded-md transition-all duration-300 font-heading tracking-wide"
              active-class="text-xtreme-yellow bg-xtreme-dark"
            >
              Evenementen
            </router-link>
          </li>
          <li>
            <router-link 
              to="/trainingsschema" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-frost-white hover:text-xtreme-yellow hover:bg-xtreme-dark rounded-md transition-all duration-300 font-heading tracking-wide"
              active-class="text-xtreme-yellow bg-xtreme-dark"
            >
              Trainingsschema
            </router-link>
          </li>
          <li>
            <router-link 
              to="/contact" 
              @click="closeMobileMenu"
              class="block px-3 py-2 text-frost-white hover:text-xtreme-yellow hover:bg-xtreme-dark rounded-md transition-all duration-300 font-heading tracking-wide"
              active-class="text-xtreme-yellow bg-xtreme-dark"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<style scoped>
.nav-link {
  position: relative;
  padding-bottom: 4px;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  background-color: #FFED4E;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.router-link-active::after {
  width: 100%;
}
</style>