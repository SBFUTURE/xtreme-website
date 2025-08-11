<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Hero Section -->
    <section class="relative overflow-hidden py-32 px-4 min-h-screen flex items-center hero-background">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="@/assets/Images/professional-pictures/IMG_4083.JPG" 
          alt="Xtreme On Ice Training" 
          class="w-full h-full object-cover"
        />
        <!-- Light overlay for text readability -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        <!-- Subtle gradient overlay -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/40"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="text-center lg:text-left ice-glide">
            <h1 class="text-6xl lg:text-8xl font-heading font-bold mb-6 text-xtreme-yellow text-shadow-ice">
              XTREME ON ICE
            </h1>
            <h2 class="text-3xl lg:text-4xl font-heading font-medium mb-8 text-white drop-shadow-lg">
              IJsvereniging Liedekerke - België
            </h2>
            <p class="text-xl lg:text-2xl mb-12 text-gray-100 max-w-2xl leading-relaxed drop-shadow-md">
              Welkom bij Xtreme On Ice, dé ijsvereniging waar passie voor schaatsen en plezier samenkomen. 
              Ontdek de magie van het ijs in een professionele en vriendelijke omgeving.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <router-link 
                to="/events"
                class="btn-primary"
              >
                Bekijk Evenementen
              </router-link>
              <router-link 
                to="/about"
                class="btn-secondary"
              >
                Meer Over Ons
              </router-link>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="relative">
              <div class="bg-black bg-opacity-40 rounded-full p-4 backdrop-blur-sm border-2 border-xtreme-yellow">
                <img 
                  src="@/assets/Images/XtremeLogo.jpg" 
                  alt="Xtreme On Ice Logo" 
                  class="w-72 h-72 lg:w-80 lg:h-80 rounded-full shadow-ice frost-sparkle"
                />
              </div>
              <!-- Enhanced Decorative elements -->
              <div class="absolute -top-6 -right-6 w-10 h-10 bg-xtreme-yellow rounded-full frost-sparkle animation-delay-300 shadow-lg"></div>
              <div class="absolute -bottom-8 -left-8 w-8 h-8 bg-xtreme-light-yellow rounded-full frost-sparkle animation-delay-600 shadow-lg"></div>
              <div class="absolute top-1/2 -left-10 w-6 h-6 bg-xtreme-yellow rounded-full frost-sparkle animation-delay-900 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4 bg-xtreme-dark bg-opacity-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6 text-xtreme-yellow">
            Waarom Xtreme On Ice?
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Ontdek wat ons onderscheidt als ijsvereniging in Liedekerke, België
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="feature-card group">
            <div class="feature-icon">
              ⛸️
            </div>
            <h3 class="text-2xl font-heading font-bold mb-4 text-xtreme-yellow">
              Professionele Begeleiding
            </h3>
            <p class="text-gray-300">
              Ervaren trainers begeleiden je bij elke stap op het ijs, van beginner tot gevorderd niveau.
            </p>
          </div>

          <div class="feature-card group">
            <div class="feature-icon">
              🏟️
            </div>
            <h3 class="text-2xl font-heading font-bold mb-4 text-xtreme-yellow">
              Moderne Faciliteiten
            </h3>
            <p class="text-gray-300">
              State-of-the-art ijsbaan met uitstekende voorzieningen voor alle leeftijden.
            </p>
          </div>

          <div class="feature-card group">
            <div class="feature-icon">
              👥
            </div>
            <h3 class="text-2xl font-heading font-bold mb-4 text-xtreme-yellow">
              Gezellige Gemeenschap
            </h3>
            <p class="text-gray-300">
              Wordt deel van onze warme ijsschaatsgemeenschap waar iedereen welkom is.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Photo Gallery Section -->
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6 text-xtreme-yellow">
            In Actie
          </h2>
          <p class="text-lg text-gray-300 max-w-3xl mx-auto">
            Bekijk meer van onze gezellige schaatsevenementen en trainingen
          </p>
        </div>

        <div class="max-w-2xl mx-auto">
          <div class="gallery-item group">
            <div class="relative overflow-hidden rounded-xl bg-black">
              <img 
                src="@/assets/Images/professional-pictures/IMG_4086.JPG" 
                alt="Xtreme On Ice evenement" 
                class="w-full h-auto min-h-[500px] max-h-[600px] object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div class="absolute bottom-6 left-6 text-white">
                <h3 class="text-3xl font-heading font-bold text-xtreme-yellow mb-3">
                  Evenement Sfeer
                </h3>
                <p class="text-lg text-gray-200">
                  De gezellige en professionele atmosfeer tijdens onze schaatsevenementen waar iedereen welkom is
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <div class="bg-xtreme-dark bg-opacity-70 rounded-2xl p-12 shadow-frost border border-xtreme-yellow border-opacity-30">
          <h2 class="text-4xl lg:text-5xl font-heading font-bold mb-6 text-xtreme-yellow">
            Klaar om te Beginnen?
          </h2>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij Xtreme On Ice en ervaar de opwinding van schaatsen in een professionele en vriendelijke omgeving.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact"
              class="btn-primary"
            >
              Neem Contact Op
            </router-link>
            <router-link 
              to="/events"
              class="btn-secondary"
            >
              Bekijk Schema
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.hero-background {
  position: relative;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.3) 100%
  );
  z-index: 1;
}

.text-shadow-ice {
  text-shadow: 
    0 0 10px rgba(255, 237, 78, 0.8),
    0 0 20px rgba(255, 237, 78, 0.4),
    2px 2px 4px rgba(0, 0, 0, 0.6),
    -1px -1px 2px rgba(0, 0, 0, 0.3);
}

.btn-primary {
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #FFED4E 0%, #FFF59D 100%);
  color: #000000;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.btn-secondary {
  padding: 1rem 2rem;
  border: 2px solid #FFED4E;
  color: #FFED4E;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  background: transparent;
}

.btn-secondary:hover {
  background-color: #FFED4E;
  color: #000000;
}

.feature-card {
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  padding: 2rem;
  border-radius: 0.75rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 237, 78, 0.2);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.feature-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  display: block;
  filter: drop-shadow(0 0 10px rgba(255, 237, 78, 0.5));
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

.animation-delay-900 {
  animation-delay: 0.9s;
}

/* Custom ice-themed decorations */
.feature-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, transparent, rgba(255, 237, 78, 0.1), transparent);
  border-radius: inherit;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.feature-card:hover::before {
  opacity: 1;
}

.gallery-item {
  transition: all 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 237, 78, 0.3);
}

.gallery-item img {
  filter: brightness(0.9);
  transition: all 0.3s ease;
}

.gallery-item:hover img {
  filter: brightness(1.1);
}

.gallery-item .absolute.bottom-6 {
  transform: translateY(10px);
  opacity: 0.9;
  transition: all 0.3s ease;
}

.gallery-item:hover .absolute.bottom-6 {
  transform: translateY(0);
  opacity: 1;
}
</style>
