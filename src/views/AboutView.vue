<template>
  <div class="min-h-screen bg-ice-gradient">
    <!-- Hero Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h1 class="text-5xl lg:text-6xl font-heading font-bold mb-8 text-xtreme-yellow ice-glide">
          Over Xtreme On Ice
        </h1>
        <p class="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Ontdek het verhaal achter onze ijsvereniging en wat ons zo bijzonder maakt
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="ice-card">
            <h2 class="text-3xl font-heading font-bold mb-6 text-xtreme-yellow">
              Onze Geschiedenis
            </h2>
            <p class="text-gray-300 leading-relaxed mb-4">
              Xtreme On Ice is ontstaan uit een passie voor schaatsen en de wens om deze sport toegankelijk 
              te maken voor iedereen in Liedekerke en omgeving. Sinds onze oprichting zijn we uitgegroeid tot 
              een gerespecteerde ijsvereniging die bekend staat om zijn professionele begeleiding en 
              gezellige sfeer.
            </p>
            <p class="text-gray-300 leading-relaxed">
              We geloven dat schaatsen meer is dan alleen een sport - het is een manier om samen te komen, 
              jezelf uit te dagen en plezier te hebben op het ijs.
            </p>
          </div>
          
          <div class="flex justify-center">
            <img 
              src="/Images/XtremeLogo.jpg" 
              alt="Xtreme On Ice Logo" 
              class="w-64 h-64 rounded-full shadow-ice border-4 border-xtreme-yellow animate-float"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-16 px-4 bg-xtreme-dark bg-opacity-50">
      <div class="max-w-4xl mx-auto text-center">
        <div class="ice-card">
          <h2 class="text-4xl font-heading font-bold mb-8 text-xtreme-yellow">
            Onze Missie
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed">
            Xtreme On Ice streeft ernaar om schaatsen toegankelijk te maken voor alle leeftijden en 
            vaardigheidsniveaus. We bieden een veilige, professionele en inspirerende omgeving waar 
            iedereen kan genieten van de prachtige sport van het schaatsen, terwijl we tegelijkertijd 
            een sterke gemeenschap opbouwen die gebaseerd is op respect, plezier en sportiviteit.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  document.title = 'Over Xtreme On Ice | Geschiedenis & Missie';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Lees alles over de geschiedenis, missie en waarden van Xtreme On Ice. Ontdek waarom onze ijsvereniging uniek is in België.');
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = 'Lees alles over de geschiedenis, missie en waarden van Xtreme On Ice. Ontdek waarom onze ijsvereniging uniek is in België.';
    document.head.appendChild(meta);
  }
})
</script>

<style scoped>
.ice-card {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 237, 78, 0.3);
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.ice-card:hover {
  border-color: rgba(255, 237, 78, 0.6);
  box-shadow: 0 4px 20px rgba(255, 237, 78, 0.3);
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
</style>
