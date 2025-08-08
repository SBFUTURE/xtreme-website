<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-8 text-xtreme-yellow ice-glide">
          Contact & Inschrijving
        </h1>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Neem contact met ons op of schrijf je direct in voor onze ijsvereniging
        </p>
      </div>
    </section>

    <!-- Contact Information Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-heading font-bold mb-12 text-xtreme-yellow text-center">
          Volg Ons Online
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Facebook -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#1877F2] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Facebook</h3>
            <p class="text-gray-300 mb-4">Volg onze updates en evenementen</p>
            <a 
              href="https://facebook.com/xtremeonice" 
              target="_blank" 
              class="inline-block bg-[#1877F2] text-white px-6 py-2 rounded-lg hover:bg-[#166FE5] transition-colors"
            >
              Volg Ons
            </a>
          </div>

          <!-- Instagram -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#E4405F] via-[#F77737] to-[#FFDC80] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Instagram</h3>
            <p class="text-gray-300 mb-4">Bekijk onze foto's en stories</p>
            <a 
              href="https://www.instagram.com/xtreme_on_ice/" 
              target="_blank" 
              class="inline-block bg-gradient-to-r from-[#E4405F] to-[#F77737] text-white px-6 py-2 rounded-lg hover:from-[#D63384] hover:to-[#E4405F] transition-colors"
            >
              Volg Ons
            </a>
          </div>

          <!-- TikTok -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#000000] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">TikTok</h3>
            <p class="text-gray-300 mb-4">Korte video's van onze trainingen</p>
            <a 
              href="https://www.tiktok.com/@xtreme_on_ice" 
              target="_blank" 
              class="inline-block bg-[#000000] text-white px-6 py-2 rounded-lg hover:bg-[#333333] transition-colors"
            >
              Volg Ons
            </a>
          </div>

          <!-- YouTube -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-[#FF0000] rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">YouTube</h3>
            <p class="text-gray-300 mb-4">Training video's en tutorials</p>
            <a 
              href="https://www.youtube.com/@xtremeoniceliedekerke3232" 
              target="_blank" 
              class="inline-block bg-[#FF0000] text-white px-6 py-2 rounded-lg hover:bg-[#CC0000] transition-colors"
            >
              Abonneer
            </a>
          </div>

          <!-- Phone Number -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-xtreme-yellow rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-xtreme-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Telefoon</h3>
            <p class="text-gray-300 mb-4">Bel ons voor vragen</p>
            <a 
              href="tel:+32471823142" 
              class="inline-block bg-xtreme-yellow text-xtreme-black font-bold px-6 py-2 rounded-lg hover:bg-xtreme-light-yellow transition-colors"
            >
             +32 471 82 31 42
            </a>
          </div>

          <!-- Email -->
          <div class="ice-card text-center hover:transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 mx-auto mb-4 bg-xtreme-yellow rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-xtreme-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Email</h3>
            <p class="text-gray-300 mb-4">Stuur ons een bericht</p>
            <a 
              href="mailto:xtremeoniceliedekerke@gmail.com" 
              class="inline-block bg-xtreme-yellow text-xtreme-black font-bold px-6 py-2 rounded-lg hover:bg-xtreme-light-yellow transition-colors"
            >
              xtremeoniceliedekerke@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Registration Form Section -->
    <section class="py-16 px-4 bg-xtreme-dark bg-opacity-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-heading font-bold mb-12 text-xtreme-yellow text-center">
          Inschrijvingsformulier
        </h2>
        
        <div class="ice-card">
          <form @submit.prevent="submitForm" class="space-y-6">
            <!-- Personal Information -->
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="firstName">
                  Voornaam *
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="form.firstName"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="Je voornaam"
                />
              </div>
              
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="lastName">
                  Achternaam *
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="form.lastName"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="Je achternaam"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="email">
                  Email *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="je.email@example.com"
                />
              </div>
              
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="phone">
                  Telefoonnummer *
                </label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="+32 123 45 67 89"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="birthDate">
                  Geboortedatum *
                </label>
                <input 
                  type="date" 
                  id="birthDate" 
                  v-model="form.birthDate"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                />
              </div>
              
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="experience">
                  Schaatservaring
                </label>
                <select 
                  id="experience" 
                  v-model="form.experience"
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                >
                  <option value="beginner">Beginner (geen ervaring)</option>
                  <option value="intermediate">Gemiddeld (enkele jaren)</option>
                  <option value="advanced">Gevorderd (veel ervaring)</option>
                </select>
              </div>
            </div>

            <!-- Address -->
            <div>
              <label class="block text-xtreme-yellow font-heading mb-2" for="address">
                Adres *
              </label>
              <input 
                type="text" 
                id="address" 
                v-model="form.address"
                required
                class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                placeholder="Straat + nummer"
              />
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="postalCode">
                  Postcode *
                </label>
                <input 
                  type="text" 
                  id="postalCode" 
                  v-model="form.postalCode"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="1234"
                />
              </div>
              
              <div>
                <label class="block text-xtreme-yellow font-heading mb-2" for="city">
                  Stad *
                </label>
                <input 
                  type="text" 
                  id="city" 
                  v-model="form.city"
                  required
                  class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                  placeholder="Stad"
                />
              </div>
            </div>

            <!-- Emergency Contact -->
            <div class="border-t border-gray-600 pt-6">
              <h3 class="text-2xl font-heading font-bold mb-4 text-xtreme-yellow">
                Noodcontact (voor minderjarigen verplicht)
              </h3>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xtreme-yellow font-heading mb-2" for="emergencyName">
                    Naam noodcontact
                  </label>
                  <input 
                    type="text" 
                    id="emergencyName" 
                    v-model="form.emergencyName"
                    class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                    placeholder="Voor- en achternaam"
                  />
                </div>
                
                <div>
                  <label class="block text-xtreme-yellow font-heading mb-2" for="emergencyPhone">
                    Telefoonnummer noodcontact
                  </label>
                  <input 
                    type="tel" 
                    id="emergencyPhone" 
                    v-model="form.emergencyPhone"
                    class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                    placeholder="+32 123 45 67 89"
                  />
                </div>
              </div>
            </div>

            <!-- Medical Information -->
            <div>
              <label class="block text-xtreme-yellow font-heading mb-2" for="medicalInfo">
                Medische informatie
              </label>
              <textarea 
                id="medicalInfo" 
                v-model="form.medicalInfo"
                rows="3"
                class="w-full px-4 py-3 rounded-lg bg-xtreme-dark border border-gray-600 text-white focus:border-xtreme-yellow focus:ring-1 focus:ring-xtreme-yellow outline-none transition-colors"
                placeholder="Allergieën, medicatie, bijzonderheden..."
              ></textarea>
            </div>

            <!-- Terms and Conditions -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="terms" 
                v-model="form.acceptTerms"
                required
                class="mt-1 w-5 h-5 text-xtreme-yellow bg-xtreme-dark border-gray-600 rounded focus:ring-xtreme-yellow focus:ring-2"
              />
              <label for="terms" class="text-gray-300">
                Ik ga akkoord met de <a href="#" class="text-xtreme-yellow hover:text-xtreme-light-yellow">algemene voorwaarden</a> 
                en het <a href="#" class="text-xtreme-yellow hover:text-xtreme-light-yellow">privacybeleid</a> van Xtreme On Ice. *
              </label>
            </div>

            <!-- Newsletter -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="newsletter" 
                v-model="form.newsletter"
                class="mt-1 w-5 h-5 text-xtreme-yellow bg-xtreme-dark border-gray-600 rounded focus:ring-xtreme-yellow focus:ring-2"
              />
              <label for="newsletter" class="text-gray-300">
                Ik wil graag nieuwsbrieven ontvangen met updates over trainingen en evenementen.
              </label>
            </div>

            <!-- Media Consent -->
            <div class="flex items-start space-x-3">
              <input 
                type="checkbox" 
                id="mediaConsent" 
                v-model="form.mediaConsent"
                class="mt-1 w-5 h-5 text-xtreme-yellow bg-xtreme-dark border-gray-600 rounded focus:ring-xtreme-yellow focus:ring-2"
              />
              <label for="mediaConsent" class="text-gray-300">
                Ik geef toestemming voor foto's/video's op onze sociale media kanalen.
              </label>
            </div>

            <!-- Submit Button -->
            <div class="text-center pt-6">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="bg-xtreme-yellow text-xtreme-black font-heading font-bold px-12 py-4 rounded-lg text-xl hover:bg-xtreme-light-yellow transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting">Inschrijving Versturen</span>
                <span v-else>Versturen...</span>
              </button>
            </div>
          </form>

          <!-- Success Message -->
          <div v-if="showSuccess" class="mt-6 p-4 bg-green-600 bg-opacity-20 border border-green-500 rounded-lg text-center">
            <h3 class="text-xl font-heading font-bold text-green-400 mb-2">Inschrijving Ontvangen!</h3>
            <p class="text-green-300">
              Bedankt voor je inschrijving. We nemen zo snel mogelijk contact met je op voor verdere informatie.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="ice-card text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-xtreme-yellow rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-xtreme-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Locatie</h3>
            <p class="text-gray-300">
              Schaatsbaan Liedekerke,<br>
              Sportlaan 1 - 1770 Liedekerke - België
            </p>
          </div>

          <div class="ice-card text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-xtreme-yellow rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-xtreme-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Openingstijden</h3>
            <p class="text-gray-300">
              Trainingen volgens schema<br>
              Zie <router-link to="/trainingskalender" class="text-xtreme-yellow hover:text-xtreme-light-yellow">trainingskalender</router-link><br>
              voor actuele tijden
            </p>
          </div>

          <div class="ice-card text-center">
            <div class="w-16 h-16 mx-auto mb-4 bg-xtreme-yellow rounded-full flex items-center justify-center">
              <svg class="w-8 h-8 text-xtreme-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h3 class="text-xl font-heading font-bold mb-2 text-xtreme-yellow">Wat te verwachten</h3>
            <p class="text-gray-300">
              Professionele begeleiding<br>
              Alle niveaus welkom<br>
              Moderne faciliteiten
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      isSubmitting: false,
      showSuccess: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        experience: 'beginner',
        address: '',
        postalCode: '',
        city: '',
        emergencyName: '',
        emergencyPhone: '',
        medicalInfo: '',
        acceptTerms: false,
        newsletter: false,
        mediaConsent: false
      }
    }
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true;
      
      try {
        // Simuleer een API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // In een echte implementatie zou je hier de data naar een server sturen
        console.log('Form submitted:', this.form);
        
        // Reset form
        this.resetForm();
        this.showSuccess = true;
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          this.showSuccess = false;
        }, 5000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Er is een fout opgetreden. Probeer het opnieuw.');
      } finally {
        this.isSubmitting = false;
      }
    },
    
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        birthDate: '',
        experience: 'beginner',
        address: '',
        postalCode: '',
        city: '',
        emergencyName: '',
        emergencyPhone: '',
        medicalInfo: '',
        acceptTerms: false,
        newsletter: false,
        mediaConsent: false
      }
    }
  }
}
</script>

<style scoped>
.ice-card {
  background: rgba(26, 26, 26, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 237, 78, 0.2);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.ice-card:hover {
  border-color: rgba(255, 237, 78, 0.4);
  box-shadow: 0 12px 40px rgba(255, 237, 78, 0.1);
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

.btn-secondary {
  background: transparent;
  color: #FFED4E;
  padding: 1rem 2rem;
  border: 2px solid #FFED4E;
  border-radius: 0.5rem;
  font-weight: bold;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-secondary:hover {
  background: #FFED4E;
  color: #000;
  transform: translateY(-2px);
}

input:focus, select:focus, textarea:focus {
  box-shadow: 0 0 0 3px rgba(255, 237, 78, 0.1);
}

/* Custom checkbox styling */
input[type="checkbox"] {
  accent-color: #FFED4E;
}

/* Animation for success message */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-in {
  animation: slideInUp 0.5s ease-out;
}
</style>