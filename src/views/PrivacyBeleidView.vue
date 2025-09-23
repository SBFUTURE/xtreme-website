<template>
  <div class="min-h-screen bg-ice-gradient py-16 px-4">
    <div class="max-w-3xl mx-auto ice-card">
      <div class="mb-8">
        <button 
          @click="$router.back()"
          class="inline-flex items-center text-xtreme-yellow hover:text-xtreme-light-yellow transition-colors font-semibold focus:outline-none"
        >
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Terug naar vorige pagina
        </button>
      </div>
      <h1 class="text-4xl font-heading font-bold mb-8 text-xtreme-yellow text-center">Privacybeleid</h1>
      <div class="text-gray-300 space-y-6">
        <p>Laatste update: 23 september 2025</p>
        <p>
          Wij hechten veel waarde aan de privacy van onze leden en bezoekers. Hieronder leggen wij uit hoe wij omgaan met persoonsgegevens:
        </p>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Welke gegevens verzamelen wij?</h2>
        <p>
          Via het inschrijfformulier op onze website verzamelen wij de volgende gegevens:
        </p>
        <ul class="list-disc ml-6">
          <li>Voornaam</li>
          <li>Achternaam</li>
          <li>E-mailadres</li>
          <li>Telefoonnummer</li>
          <li>Eventuele toestemming voor nieuwsbrieven en mediagebruik</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Hoe worden deze gegevens verwerkt?</h2>
        <ul class="list-disc ml-6">
          <li>De gegevens worden via Formspree rechtstreeks doorgestuurd naar het e-mailadres van Xtreme On Ice (xtremeoniceliedekerke@gmail.com).</li>
          <li>Wij bewaren deze gegevens niet op de website of in een database.</li>
          <li>De gegevens zijn alleen zichtbaar in de inbox van het bovengenoemde e-mailadres.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Waarvoor gebruiken wij deze gegevens?</h2>
        <ul class="list-disc ml-6">
          <li>Om contact op te nemen met geïnteresseerden en leden.</li>
          <li>Om inschrijvingen voor proeftrainingen te verwerken.</li>
          <li>Om nieuwsbrieven te versturen (indien toestemming gegeven).</li>
          <li>Om te voldoen aan wettelijke verplichtingen.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Delen wij gegevens met derden?</h2>
        <ul class="list-disc ml-6">
          <li>Nee, wij delen geen persoonsgegevens met derden.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Hoe lang bewaren wij uw gegevens?</h2>
        <ul class="list-disc ml-6">
          <li>Uw gegevens worden alleen bewaard in de inbox van het e-mailadres zolang als nodig is voor communicatie en administratie.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Uw rechten</h2>
        <ul class="list-disc ml-6">
          <li>U kunt altijd verzoeken om uw gegevens te laten verwijderen uit onze inbox. Neem hiervoor contact op via <a href="mailto:xtremeoniceliedekerke@gmail.com" class="text-xtreme-yellow underline">xtremeoniceliedekerke@gmail.com</a>.</li>
        </ul>
        <h2 class="text-2xl font-bold text-xtreme-yellow mt-6 mb-2">Contact</h2>
        <p>
          Voor vragen over ons privacybeleid kunt u contact opnemen via <a href="mailto:xtremeoniceliedekerke@gmail.com" class="text-xtreme-yellow underline">xtremeoniceliedekerke@gmail.com</a>.
        </p>
        <hr class="my-8 border-xtreme-yellow border-opacity-30">
        <p class="text-xs text-gray-500 text-center">
          Dit privacybeleid kan worden aangepast. Raadpleeg deze pagina voor de meest actuele versie.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PrivacyBeleidView'
}
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
.bg-ice-gradient {
  background: linear-gradient(135deg, #1a1a1a 0%, #232323 100%);
}
.text-xtreme-yellow {
  color: #FFED4E;
}
.border-xtreme-yellow {
  border-color: #FFED4E;
}
</style>
