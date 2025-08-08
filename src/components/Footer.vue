<template>
  <footer class="bg-xtreme-dark border-t border-xtreme-yellow border-opacity-30">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        <!-- Logo & Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-4">
            <img 
              src="@/assets/Images/XtremeLogo.jpg" 
              alt="Xtreme On Ice Logo" 
              class="w-12 h-12 rounded-full mr-3"
            />
            <div>
              <h3 class="text-xl font-heading font-bold text-xtreme-yellow">XTREME ON ICE</h3>
              <p class="text-gray-400 text-sm">IJsvereniging Liedekerke</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4 leading-relaxed">
            Ontdek de magie van het ijs bij Xtreme On Ice. Onze ijsvereniging in Liedekerke biedt een professionele en vriendelijke omgeving voor schaatsliefhebbers van alle niveaus.
          </p>
          <div class="flex space-x-4">
            <!-- Social Media Links -->
            <a href="https://www.facebook.com/xtremeonice" target="_blank" rel="noopener noreferrer" 
               class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/xtreme_on_ice/" target="_blank" rel="noopener noreferrer"
               class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@xtreme_on_ice" target="_blank" rel="noopener noreferrer"
               class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@xtremeoniceliedekerke3232" target="_blank" rel="noopener noreferrer"
               class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-heading font-bold text-xtreme-yellow mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300">
                Over Ons
              </router-link>
            </li>
            <li>
              <router-link to="/trainingskalender" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300">
                Trainingskalender
              </router-link>
            </li>
            <li>
              <router-link to="/evenementen" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300">
                Evenementen
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300">
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-heading font-bold text-xtreme-yellow mb-4">Contact Info</h4>
          <div class="space-y-3">
            <div class="flex items-start">
              <svg class="w-5 h-5 text-xtreme-yellow mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <p class="text-gray-300 text-sm">
                Sportlaan 1 - 1770 Liedekerke - België
              </p>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-xtreme-yellow mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <a href="tel:+32123456789" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300 text-sm">
                +32 471 82 31 42
              </a>
            </div>
            <div class="flex items-center">
              <svg class="w-5 h-5 text-xtreme-yellow mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <a href="mailto:info@xtremeonice.be" class="text-gray-300 hover:text-xtreme-yellow transition-colors duration-300 text-sm">
                info@xtremeonice.be
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} Xtreme On Ice. Alle rechten voorbehouden.
          </p>
          <div class="flex space-x-4 text-sm">
            <a href="#" class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              Privacybeleid
            </a>
            <a href="#" class="text-gray-400 hover:text-xtreme-yellow transition-colors duration-300">
              Algemene Voorwaarden
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.bg-xtreme-dark {
  background-color: #1a1a1a;
}

.text-xtreme-yellow {
  color: #FFED4E;
}

.border-xtreme-yellow {
  border-color: #FFED4E;
}
</style>
